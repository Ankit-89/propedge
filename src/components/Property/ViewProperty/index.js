import React, {useState, useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {FlatList, SafeAreaView, Text, View, Image} from 'react-native';
import ViewPropertyItem from './ViewPropertyItem';
import {styles} from './styles';
import * as Images from '../../../assets/Images/map';
import ActivityHud from '../../ActivityIndicator';
import NoDataView from '../../NoDataView';

function ViewProperty({navigation, loading}) {
  const {user} = useSelector(state => state.Auth);
  const [checkUser, setCheckUser] = useState(
    user.data.user.type == 'owner' ? true : false,
  );
  const propertyState = useSelector(state => state.Property);
  const dispatch = useDispatch();

  useEffect(() => {
    checkUser;
    // ? dispatch.Property.GetOwnerUnits(user.user.id) :
    dispatch.Property.GetProperty();
  }, [checkUser, dispatch.Property]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityHud />
      ) : (
        <>
          <View style={styles.viewStyle}>
            <Image
              source={Images.Property.logo}
              resizeMode="contain"
              style={styles.imageStyle}
            />
          </View>
          <Text style={styles.propertyTitle}>
            {checkUser ? 'My Units' : 'Property'}
          </Text>
          {checkUser ? (
            propertyState.ownerUnits.length > 0 ? (
              <FlatList
                data={propertyState.ownerUnits}
                ItemSeparatorComponent={() => <View style={{paddingTop: 16}} />}
                renderItem={({item, index}) => (
                  <ViewPropertyItem
                    item={item}
                    index={index}
                    navigation={navigation}
                    srNo={index + 1}
                    checkUser={checkUser}
                  />
                )}
                keyExtractor={item => item.id}
              />
            ) : (
              <NoDataView
                title={'No Units found, please contact your administrator!!'}
              />
            )
          ) : propertyState.arrProperty.length > 0 ? (
            <FlatList
              data={propertyState.arrProperty}
              ItemSeparatorComponent={() => <View style={{paddingTop: 16}} />}
              renderItem={({item, index}) => (
                <ViewPropertyItem
                  item={item}
                  index={index}
                  navigation={navigation}
                  srNo={index + 1}
                  checkUser={checkUser}
                />
              )}
              keyExtractor={item => item.id}
            />
          ) : (
            <>
              <NoDataView
                title={'No Property found, please contact your administrator!!'}
              />
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
}
const mapState = state => ({
  loading: state.loading.models.Property,
});

export default connect(mapState)(ViewProperty);
