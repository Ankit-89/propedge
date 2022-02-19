import React, { useEffect } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import * as Images from '../../../assets/Images/map';
import { useDispatch, useSelector } from 'react-redux';
import ActivityHud from '../../../components/ActivityIndicator';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';

function ViewMenu({ navigation }) {
  const menuState = useSelector(state => state.Menu);
  const loading = useSelector(state => state.loading.models.Menu);
  const dispatch = useDispatch();
  const icons = {'about' : Images.Menu.about, 'privacy-policy': Images.Menu.privacy, 'terms-conditions': Images.Menu.terms, 'cancellation-policy': Images.Menu.cancel}

  useEffect(() => {
    dispatch.Menu.GetAllPages();
  }, []);

  const getPageDetail = (item) => {
    dispatch.Menu.getPageContent(item.slug).then(res => {
      console.log(res);
      navigation.navigate('StaticPage', {
        title: item.title,
        isFrom: 'about',
        content: res.data.content
      })
    })
  }

  async function clear() {
    await AsyncStorage.setItem('user', JSON.stringify({}));
    navigation.navigate('UserType');
  }
  const _renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() =>
          getPageDetail(item)
        }>
        <View style={styles.mainSubView}>
          <View style={styles.innerViewStyle}>
            <View style={styles.subViewStyle}>
              <Image
                source={icons[item.slug]}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            </View>
            <Text style={styles.subTextStyle}>{item.title}</Text>
          </View>
          <Image
            source={Images.Menu.next}
            resizeMode="contain"
            style={styles.iconStyleNext}
          />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <Image
          source={Images.Property.logo}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.settingsTextStyle}>Settings</Text>
      {
        loading ?
          <ActivityHud />
          :
          <>
            <FlatList
              style={styles.flatListContainer}
              data={menuState.pages}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                _renderItem(item)
              )}
              keyExtractor={item => item.slug}
            />
          </>
      }

      {__DEV__ ? (
        <TouchableOpacity
          onPress={() => {
            clear()
          }}>
          <View style={styles.mainSubView}>
            <View style={styles.innerViewStyle}>
              <View style={styles.subViewStyle}>
                <Image
                  source={Images.Menu.cancel}
                  resizeMode="contain"
                  style={styles.iconStyle}
                />
              </View>
              <Text style={styles.subTextStyle}>Logout</Text>
            </View>
            <Image
              source={Images.Menu.next}
              resizeMode="contain"
              style={styles.iconStyleNext}
            />
          </View>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
}

export default ViewMenu;
