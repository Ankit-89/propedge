import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import * as Images from '../../../assets/Images/map';

const ViewEmptyList = ({selectedElementUnit}) => (
  <View style={styles.emptyList}>
    <Image style={styles.emptyImage} source={Images.Appointment.emptyList} />
    <Text style={styles.emptyListText}>There is no {selectedElementUnit}</Text>
    <Text style={styles.emptyListTextAgain}>appointment right now</Text>
  </View>
);
export default ViewEmptyList;
