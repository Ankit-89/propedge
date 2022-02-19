import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

const ViewPropertyItem = ({item, index, navigation, checkUser, srNo}) =>
  checkUser ? (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('UnitDetail', {
          item: item,
        })
      }>
      <View style={{flex: 1}} key={index}>
        <FastImage
          style={styles.ownerImage}
          source={{
            uri: 'https://i.ibb.co/Y0v867r/pexels-photo-129494.jpg',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.ownerPropertyOverlay} />
        <View style={styles.propertyContainer}>
          <View>
            <Text style={styles.title}>{item.unitName}</Text>
            {/* <Text style={styles.address}>{item.address}</Text> */}
            <View style={styles.typeContainer}>
              <Text style={styles.type}>{item.unitType}</Text>
            </View>
            <View style={styles.srNoContainer}>
              <View style={{marginLeft: 10}}>
                <Text style={styles.srNo}>Sr. No</Text>
                <Text style={styles.srNoText}>{srNo}</Text>
              </View>
              <View style={{marginLeft: 70}}>
                <Text style={styles.srNo}>Unit No</Text>
                <Text style={styles.srNoText}>{item.unitNo}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* <TouchableOpacity
        style={styles.viewUnitContainer}
        onPress={() =>
          navigation.navigate('ViewUnit', {
            propertyId: item.unitNo,
          })
        }>
        <Text style={styles.viewUnit}>View Units</Text>
      </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  ) : (
    <View style={{flex: 1}} key={index}>
      <FastImage
        style={styles.image}
        source={{
          uri: item.image.url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.propertyOverlay} />
      <View style={styles.propertyContainer}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <View style={styles.typeContainer}>
            <Text style={styles.type}>{item.type}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.viewUnitContainer}
        onPress={() =>
          navigation.navigate('ViewUnit', {
            propertyId: item.id,
          })
        }>
        <Text style={styles.viewUnit}>View Units</Text>
      </TouchableOpacity>
    </View>
  );

export default ViewPropertyItem;
