import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {FontFamily, Theme} from '../../utils/common';
import FontSize from '../../utils/common/FontsSize';
import * as Images from '../../assets/Images/map';

const NoDataView = props => {
  return (
    <View style={styles.textContainer}>
      <Image style={styles.emptyImage} source={Images.Appointment.emptyList} />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default NoDataView;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  emptyImage: {
    width: 250,
    height: 150,
    alignItems: 'center',
    marginLeft: 25,
  },
  text: {
    fontSize: FontSize(16),
    fontFamily: FontFamily.Mont.Regular,
    color: Theme,
    lineHeight: 30,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
