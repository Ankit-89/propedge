import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, FlatList, SafeAreaView, Text } from 'react-native';
import ViewUnitItem from './ViewUnitItem';
import Header from '../../Header';
import { styles } from './styles';
import { connect } from 'react-redux';
import { Theme } from '../../../utils/common';
import ActivityHud from '../../ActivityIndicator';
import NoDataView from '../../NoDataView';

function ViewUnit({ route, navigation, loading }) {
  const { propertyId } = route.params;
  const propertyState = useSelector(state => state.Property);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.Property.GetUnit();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        title={
          propertyState.totalUnits == '' ? 'Unit List' : `Unit List (${propertyState.totalUnits})`
        }
        hasSearch={true}
      />
      {propertyState.isIdleUnitList === true ? (
        <ActivityHud />
      ) : (
      <>
        {propertyState.arrUnit.length > 0 ? (
          <FlatList
            style={styles.flatListContainer}
            data={propertyState.arrUnit}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <ViewUnitItem
                item={item}
                index={index}
                navigation={navigation}
              />
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <NoDataView title="No Units found, please contact your administrator!!" />
        )}
      </>
      )}
    </SafeAreaView>
  );
}

const mapState = state => ({
  loading: state.loading.models.Property,
});

// export default ViewUnit;
export default connect(mapState)(ViewUnit);
