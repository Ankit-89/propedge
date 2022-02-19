import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import * as Images from '../../../assets/Images/map';
import {styles} from './styles';
import {useDispatch} from 'react-redux';

const AppointmentUpcoming = ({
  navigation,
  selectedPage,
  data,
  index,
  refreshBtnClick,
  appointmentId,
  isOwner,
}) => {
  const fullName = data.auditor.name.split(' ');
  const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  const auditorInitials = initials.toUpperCase();
  const dispatch = useDispatch();

  const startAudit = async id => {
    const res = await dispatch.AuditElement.StartAudit({appointment_id: id});
    console.log('SSSS',res.status)
    if (res) {
      navigation.navigate('ViewOwnerElements', {
        id: data.property_unit.id,
        selectedPage: selectedPage,
        appointmentId: appointmentId,
        index: index,
        alreadyEnd: res.status === 400
      });
    }
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FastImage
          style={styles.image}
          source={{
            uri: data.property_unit.image.url,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.headerStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.headerIcon}
              source={Images.Property.CloseBlack}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.refreshIcon}
          onPress={() => refreshBtnClick()}>
          <Image
            style={styles.refreshIconImage}
            source={Images.Appointment.refreshIcon}
          />
        </TouchableOpacity>
        <View style={styles.detailModal}>
          <View style={styles.unitDetailView}>
            <View style={styles.indicatorHandle} />
            <Text style={styles.unitDetailText}>
              {selectedPage === 'upcoming'
                ? 'Upcoming Appointment Details'
                : selectedPage === 'ongoing'
                ? 'Ongoing Appointment Details'
                : selectedPage === 'completed'
                ? 'Completed Appointment Details'
                : ''}
            </Text>
            <Text style={styles.timeText}>
              {moment(data.start).format('MMM Do, h:mm a')}
            </Text>
            <Text style={styles.appointMentAlreadyText}>
              {data.property_unit ? data.property_unit.property.address : ''}
            </Text>
            <View style={styles.border} />
            <View style={styles.srNoContainer}>
              <View>
                <Text style={styles.srNo}>Sr. No</Text>
                <Text style={styles.srNoText}>{index}</Text>
              </View>
              <View style={{alignItems: 'center', marginLeft: 40}}>
                <Text style={styles.srNo}>Dwelling</Text>
                <Text style={styles.srNoText}>
                  {data.property_unit && data.property_unit.dwelling}
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.srNo}>Unit Type</Text>
                <Text style={styles.srNoText}>
                  {data.property_unit && data.property_unit.property.type}
                </Text>
              </View>
            </View>
            <View style={styles.levelContainer}>
              <View>
                <Text style={styles.srNo}>Level</Text>
                <Text style={styles.srNoText}>
                  {data.property_unit && data.property_unit.level}
                </Text>
              </View>
              <View style={{alignItems: 'center', marginLeft: -30}}>
                <Text style={styles.srNo}>Blind/Fly</Text>
                <Text style={styles.srNoText}>
                  {data.property_unit && data.property_unit.blinds_fly}
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.srNo}>Car</Text>
                <Text style={styles.srNoText}>
                  {data.property_unit && data.property_unit.car}
                </Text>
              </View>
            </View>
            <View style={styles.badContainer}>
              <View>
                <Text style={styles.srNo}>Bedrooms</Text>
                <Text style={styles.srNoText}>
                  {data.property_unit && data.property_unit.beds}
                </Text>
              </View>
              <View style={{alignItems: 'center', marginLeft: -40}}>
                <Text style={styles.srNo}>Bathrooms</Text>
                <Text style={styles.srNoText}>
                  {data.property_unit && data.property_unit.bath}
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.srNo}>Study</Text>
                <Text style={styles.srNoText}>
                  {data.property_unit && data.property_unit.study}
                </Text>
              </View>
            </View>
            <View style={styles.furnishedContainer}>
              <Text style={styles.furnishedText}>Adaptable</Text>
              <Text style={styles.pricingDesc}>
                {data.property_unit && data.property_unit.adaptable
                  ? 'Yes'
                  : 'No'}
              </Text>
            </View>
            <View style={styles.pricingContainer}>
              <Text style={styles.pricingText}>Pricing</Text>
              <Text
                style={
                  styles.pricingAmount
                }>{`$${data.property_unit.price}`}</Text>
            </View>
            <View style={styles.realtorContainer}>
              <Text style={styles.pricingText}>Developer</Text>
              <Text style={styles.pricingDesc}>
                {data.property_unit
                  ? data.property_unit.property.developer.name
                  : ''}
              </Text>
            </View>
            <View style={styles.border} />
            <View style={styles.ownerContainer}>
              <View style={styles.ownerNameIcon}>
                <Text style={styles.ownerInitail}>{auditorInitials}</Text>
              </View>
              <View style={styles.ownerDetails}>
                <Text style={styles.ownerTitle}>Assigned Auditor</Text>
                <Text style={styles.ownerName}>
                  {data.auditor && data.auditor.name}
                </Text>
              </View>
            </View>
            {data.auditor && data.auditor.email && (
              <View style={styles.ownerMailContainer}>
                <Image
                  style={styles.ownerMailImage}
                  source={Images.Appointment.mailIcon}
                />
                <View style={styles.ownerMailDetails}>
                  <Text style={styles.ownerEmail}>{data.auditor.email}</Text>
                </View>
              </View>
            )}
            <View style={styles.ownerPhoneContainer}>
              <Image
                style={styles.ownerPhoneImage}
                source={Images.Appointment.phoneIcon}
              />
              <View style={styles.ownerPhoneDetails}>
                <Text style={styles.ownerEmail}>
                  {data.auditor && data.auditor.mobile_number}
                </Text>
              </View>
            </View>
            <View style={styles.bottomBorder} />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.startAppointMentBtn}
        onPress={() => {
          startAudit(data.id);
        }}>
        <Text style={styles.btText}>
          {selectedPage === 'upcoming'
            ? 'Start Appointment'
            : selectedPage === 'ongoing'
            ? 'Resume Appointment'
            : selectedPage === 'completed'
            ? 'View Elements Summary'
            : ''}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default AppointmentUpcoming;
