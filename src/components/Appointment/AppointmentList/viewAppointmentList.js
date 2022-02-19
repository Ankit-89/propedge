import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const ViewAppointmentList = ({
  item,
  selectedElement,
  data,
  selectedElementUnit,
  navigation,
  userType,
  index,
}) => (
  <View
    style={[
      styles.unitList,
      selectedElementUnit === item ? styles.selectedUnit : '',
    ]}>
    <TouchableOpacity onPress={() => selectedElement(item)}>
      <Text
        style={
          selectedElementUnit === item
            ? styles.selectedUnitText
            : styles.unitListText
        }>
        {userType === 'owner' ? item : item === 'upcoming' ? 'booked' : item}
      </Text>
    </TouchableOpacity>
  </View>
);
export default ViewAppointmentList;
