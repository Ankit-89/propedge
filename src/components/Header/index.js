import React from 'react';
import {SafeAreaView, Image, View, TextInput, Text} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Images from '../../assets/Images/map';

function Header({
  navigation,
  title,
  hasSearch,
  isComment,
  commentButton,
  elementUnit,
  appointmentId,
  selectedPage,
  index,
}) {
  return (
    <View style={styles.headerContainer}>
      {isComment ? (
        <TouchableOpacity
          style={styles.headerOption}
          onPress={() => commentButton(false)}>
          <Image
            style={styles.headerCloseIcon}
            source={Images.Property.Close}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.headerOption}
          onPress={() =>
            elementUnit === 'Elements' && elementUnit != undefined
              ? navigation.navigate('AppointmentDetail', {
                  selectedPage: selectedPage,
                  id: appointmentId,
                  index: index,
                })
              : navigation.goBack()
          }>
          <Image style={styles.headerIcon} source={Images.Property.Back} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      {hasSearch ? (
        <TouchableOpacity
          style={styles.headerOption}
          onPress={() => navigation.navigate('SearchUnit')}>
          <Image
            style={styles.headerIcon}
            source={Images.Property.SearchFilter}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}

export default Header;
