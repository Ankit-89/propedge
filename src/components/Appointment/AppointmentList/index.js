import React, {useEffect, useState, useCallback, useRef} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
  BackHandler,
  Alert,
} from 'react-native';
import Modal from 'react-native-modalbox';
import ViewAppointmentItem from './viewAppointmentItem';
import {styles} from './styles';
import * as Images from '../../../assets/Images/map';
import UpperContainer from './upperContainer';
import ViewEmptyList from './viewEmptyList';
import ActivityHud from '../../ActivityIndicator';
import {useFocusEffect} from '@react-navigation/native';

function AppointmentList({navigation, loading, route}) {
  const {user} = useSelector(state => state.Auth);
  const appointmentState = useSelector(state => state.Appointment);
  const dispatch = useDispatch();
  const [selectedElementUnit, setSelectedElement] = useState('upcoming');
  const [checkLoadingEvent, setCheckLoadingEvent] = useState(true);
  const [tabList] = useState(['upcoming', 'ongoing', 'completed']);
  const selectedElement = elementUnit => {
    setSelectedElement(elementUnit);
    setCheckLoadingEvent(true);
    dispatch.Appointment.GetAppointmentList({
      tab: elementUnit,
      access_token: user.data.access_token,
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refreshBtnClick = useCallback(() => {
    setCheckLoadingEvent(true);
    dispatch.Appointment.GetAppointmentList({
      tab: selectedElementUnit,
      access_token: user.data.access_token,
    });
  });

  useEffect(() => {
    dispatch.Appointment.GetAppointmentList({
      tab: selectedElementUnit,
      access_token: user.data.access_token,
    });
  }, [dispatch.Appointment, selectedElementUnit, user.data.access_token]);

  useEffect(() => {
    if (appointmentState.arrList) {
      setCheckLoadingEvent(false);
    }
  }, [appointmentState.arrList]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Do you wish to exit the application?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Exit', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);
  // useEffect(() => {
  //   let interval = null;
  //   if(!isTimerStart) {
  //     return
  //   }else {
  //     interval = setInterval(() => {
  //       refreshBtnClick();
  //     }, 5000);
  //   }

  //   return () => {
  //     setTimer(false);
  //     clearInterval(interval);
  //   };
  // }, [isTimerStart]);

  useFocusEffect(
    React.useCallback(() => {
      const interval = setInterval(() => {
        refreshBtnClick();
      }, 30000);

      return () => clearInterval(interval);
    }, [refreshBtnClick]),
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityHud />
      ) : (
        <>
          <View style={styles.viewStyle}>
            <Image
              source={Images.Property.logo}
              resizeMode="contain"
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.appointmentTag}>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={styles.propertyTitle}>Appointments</Text>
            </View>
            {/* <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={refreshBtnClick}
                style={styles.refreshIcon}>
                <Image
                  style={styles.refreshIconImage}
                  source={Images.Appointment.refreshIcon}
                />
              </TouchableOpacity>
            </View> */}
          </View>
          <UpperContainer
            userType={user.data.user.type}
            selectedElementUnit={selectedElementUnit}
            selectedElement={selectedElement}
            navigation={navigation}
            eu={tabList}
            data={tabList}
          />
          {checkLoadingEvent ? (
            <View style={styles.loader}>
              <ActivityIndicator />
            </View>
          ) : appointmentState.arrList.length > 0 ? (
            <FlatList
              style={styles.flatListContainer}
              data={appointmentState.arrList}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => {
                if (selectedElementUnit === item.status.toLowerCase()) {
                  return (
                    <ViewAppointmentItem
                      item={item}
                      index={index + 1}
                      navigation={navigation}
                      selectedElementUnit={selectedElementUnit}
                    />
                  );
                }
              }}
              keyExtractor={item => item.id}
              refreshControl={
                <RefreshControl
                  refreshing={checkLoadingEvent}
                  onRefresh={refreshBtnClick}
                />
              }
            />
          ) : (
            <>
              <ViewEmptyList selectedElementUnit={selectedElementUnit} />
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const mapState = state => ({
  loading: state.loading.models.Appointment,
});

export default connect(mapState)(AppointmentList);
