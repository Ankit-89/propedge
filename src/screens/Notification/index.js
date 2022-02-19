import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import * as Images from '../../assets/Images/map';
import moment from 'moment';

function Notification({navigation}) {
  const notificationData = useSelector(
    state => state.Notification.arrNotification,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.Notification.GetNotification();
  }, [dispatch.Notification]);

  const _renderNotificationItem = ({item, index}) => {
    const notificationDate = new Date(moment(item.created_at).format('ll'));
    const today = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const numberOfDays = Math.ceil(
      (notificationDate.getTime() - today.getTime()) / oneDay,
    );
    const timeFormated = moment(item.created_at).format('HH:MM A');
    const dateFormated =
      numberOfDays === 0
        ? `Today ${timeFormated}`
        : numberOfDays === -1
        ? `Yesterday ${timeFormated}`
        : moment(item.created_at).format('Do MMM YYYY - HH:MM A');
    return (
      <TouchableOpacity
        style={styles.notificationContainer}
        onPress={() =>
          navigation.navigate('AppointmentList', {
            appointmentTab: item.data.status,
          })
        }>
        <Image
          source={Images.Notification.bellIcon}
          style={styles.notificationIcon}
          resizeMode="contain"
        />
        <View style={styles.notificationTextView}>
          <Text style={styles.notificationText}>{item.title}</Text>
          <Text style={styles.timeText}>{dateFormated}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewStyle}>
        <Image
          source={Images.Property.logo}
          resizeMode="contain"
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.settingsTextStyle}>Notification</Text>
      <FlatList
        data={notificationData}
        renderItem={_renderNotificationItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={styles.footer} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

export default Notification;
