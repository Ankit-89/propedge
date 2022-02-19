import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import moment from 'moment';

const ViewAppointmentItem = ({
  item,
  index,
  navigation,
  selectedElementUnit,
}) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate('AppointmentDetail', {
        selectedPage: selectedElementUnit,
        id: item.id,
        index: index,
      })
    }>
    {
      item.property_unit && (
        <View style={styles.viewItemContainer}>
          <FastImage
            style={styles.image}
            source={{
              uri: item.property_unit.image.url,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={styles.unitContainer}>
            <Text style={styles.ownerName}>{item.owner.name}</Text>
            <Text style={styles.ownerDateTime}>
              {moment(item.start).format('MMM DD, hh:mm a')}
            </Text>
            <Text style={styles.ownerAddress}>
              {item.property_unit.property.address}
            </Text>
            <View style={styles.infoContainer}>
              <View style={styles.childInfoContainer}>
                <Text style={[styles.unitHeaderText, { textAlign: 'left' }]}>
                  Sr. No
                </Text>
                <Text style={[styles.unitValueText, { textAlign: 'left' }]}>
                  {index}
                </Text>
              </View>
              <View style={styles.childInfoContainer}>
                <Text style={styles.unitHeaderText}>Dwelling</Text>
                <Text style={styles.unitValueText}>
                  {item.property_unit.dwelling}
                </Text>
              </View>
              <View style={styles.childInfoContainer}>
                <Text style={[styles.unitHeaderText, { textAlign: 'right' }]}>
                  Unit Type
                </Text>
                <Text style={[styles.unitValueText, { textAlign: 'right' }]}>
                  {item.property_unit.type}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )
    }

  </TouchableOpacity>
);
export default ViewAppointmentItem;
