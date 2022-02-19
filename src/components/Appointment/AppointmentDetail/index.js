import React, {useState, useEffect, useCallback} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {styles} from './styles';
import AppointmentBooked from './appointmentBooked';
import AppointmentUpcoming from './appointmentUpcoming';
import {useFocusEffect} from '@react-navigation/native';
//import ActivityHud from '../../ActivityIndicator';
function AppointmentDetail({navigation, route, loading}) {
  const {selectedPage, id, index} = route.params;
  const appointmentState = useSelector(state => state.Appointment);
  const {user} = useSelector(state => state.Auth);
  const dispatch = useDispatch();
  const [checkUser] = useState(user.data.user.type === 'owner' ? true : false);

  useEffect(() => {
    dispatch.Appointment.GetAppointmentDetails({
      id: id,
      access_token: user.data.access_token,
    });
    // alert(appointmentState.appointmentDetails.id)
  }, [dispatch.Appointment, id]);

  const _renderKeyFeatureItem = ({item}) => {
    return (
      <View style={[styles.keyFeatureItemView, {backgroundColor: item.color}]}>
        <Image
          source={item.image}
          style={styles.kfImage}
          resizeMode="contain"
        />
        <Text style={styles.kfText}>{item.title}</Text>
      </View>
    );
  };

  const startAudit = () => {
    dispatch.AuditElement.StartAudit({
      appointment_id: appointmentState.appointmentDetails.id,
    }).then(res => {
      console.log('RESPONSE', res);
      if (res.status === 400) {
        // Auditor session isn't start yet
        Alert.alert('Error', res.data.message);
      } else if (res.status === 200 || res.status === 201) {
        // Started session
        navigation.navigate('ViewOwnerElements', {
          id: appointmentState.appointmentDetails.property_unit.id,
        });
      }
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refreshBtnClick = useCallback(() => {
    dispatch.Appointment.GetAppointmentDetails({
      id: id,
      access_token: user.data.access_token,
    });
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     refreshBtnClick();
  //   }, 30000);
  //   return () => clearInterval(interval);
  // }, []);

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
      {appointmentState.isFatching ? (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          {!checkUser &&
          Object.keys(appointmentState.appointmentDetails).length !== 0 ? (
            <AppointmentBooked
              navigation={navigation}
              _renderKeyFeatureItem={_renderKeyFeatureItem}
              selectedPage={selectedPage}
              data={appointmentState.appointmentDetails}
              index={index}
              refreshBtnClick={refreshBtnClick}
              isOwner={checkUser}
              appointmentId={id}
            />
          ) : checkUser &&
            Object.keys(appointmentState.appointmentDetails).length !== 0 ? (
            <AppointmentUpcoming
              navigation={navigation}
              _renderKeyFeatureItem={_renderKeyFeatureItem}
              selectedPage={selectedPage}
              data={appointmentState.appointmentDetails}
              index={index}
              refreshBtnClick={refreshBtnClick}
              isOwner={checkUser}
              appointmentId={id}
            />
          ) : (
            <></>
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const mapState = state => ({
  loading: state.loading.models.Appointment,
});

export default connect(mapState)(AppointmentDetail);
