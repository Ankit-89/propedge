import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ViewAppointmentList from './viewAppointmentList';
import {styles} from './styles';

const UpperContainer = ({
  eu,
  data,
  userType,
  navigation,
  selectedElement,
  selectedElementUnit,
  selectedParent,
}) => (
  <View style={styles.viewItemContainer}>
    <View
      style={userType === 'owner' ? styles.upperItem : styles.upperItemAuditor}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ViewAppointmentList
            item={item}
            userType={userType}
            index={index}
            navigation={navigation}
            data={data}
            selectedElement={selectedElement}
            selectedElementUnit={selectedElementUnit}
          />
        )}
        keyExtractor={item => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
);
export default UpperContainer;
