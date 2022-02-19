import React, { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';
import * as Images from '../../../assets/Images/map';
import { FontFamily, getFormatedDate } from '../../../utils/common';
import { connect, useDispatch, useSelector } from 'react-redux';
import ActivityHud from '../../ActivityIndicator';

function UnitDetail({ route, navigation, loading }) {
  const { id } = route.params;
  const [currentInclusion, setcurrentInclusion] = useState('');
  const {user} = useSelector(state => state.Auth);
  const propertyState = useSelector(state => state.Property);
  const dispatch = useDispatch();
  const selectedUnit = propertyState.selectedUnit;
  useEffect(() => {
    dispatch.Property.GetUnitDetail(id);
  }, []);

  const startAudit = async id => {
    const res = await dispatch.AuditElement.StartAudit({appointment_id: selectedUnit.appoinment.id});
    if (res) {
      navigation.navigate(user.data.user.type == 'owner' ? 'OwnersViewElements' : 'ViewElements', {
        id: res.data.property_unit.id,
        property_unit_id: res.data.property_unit.id,
        appointmentId: selectedUnit.appoinment.id,
        alreadyEnd: res.status === 400
      });
    }
  };
  
  const _renderKeyFeatureItem = ({ item, index }) => {
    return (
      item != null && (
        <TouchableOpacity onPress={() => setcurrentInclusion(item.id)}>
          <View
            style={[
              styles.keyFeatureItemView,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                backgroundColor: '#D7F8F5',
                // opacity: item.id === currentInclusion ? 1 : 0.5,
              },
            ]}>
            <Image
              source={Images.Property.KeyFeature2}
              style={styles.kfImage}
              resizeMode="contain"
            />
            <Text style={styles.kfText}>{item}</Text>
          </View>
        </TouchableOpacity>
      )
    );
  };

  // eslint-disable-next-line no-shadow
  const _renderSelectedInclusions = ({ item, index }) => {
    return (
      <View style={styles.itemInclusionContainer}>
        <Image
          source={Images.Property.CheckRound}
          style={styles.itemInclusionItemImage}
          resizeMode="contain"
        />
        <Text style={styles.itemInclusionItemText}>{item.area}</Text>
      </View>
    );
  };

  const getFirstLetterFromName = () => {
    const nameString =
      user.data.user.type == 'owner'
        ? selectedUnit.appoinment.auditor.name
        : selectedUnit.owner.name;
    if (nameString !== null && nameString !== undefined) {
      const arrOfString = nameString.split(' ');
      if (arrOfString.length === 1) {
        return arrOfString.shift().charAt(0);
      } else if (arrOfString.length > 1) {
        return arrOfString.shift().charAt(0) + arrOfString.pop().charAt(0);
      }
    }
    return '';
  };

  const _renderAssignAuditor = () => {
    return (
      <View style={styles.ownerContainer}>
        <View style={styles.border} />
        <View style={styles.ownerHeader}>
          <View style={styles.viewTextContainer}>
            <Text style={styles.circleViewText}>
              {getFirstLetterFromName()}
            </Text>
          </View>
          {/* <FastImage
            style={styles.ownerImage}
            source={{
              uri: 'https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_3.jpg',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          /> */}
          <View style={{ paddingLeft: 12 }}>
            <Text
              style={[styles.ownerTitle, { paddingBottom: 8, marginLeft: -3 }]}>
              {' '}
              {user.userType == 'owner' ? 'Assigned  Auditor' : 'Owned by'}
            </Text>
            <Text style={styles.ownerName}>
              {user.data.user.type == 'owner'
                ? selectedUnit.appoinment.auditor.name
                : selectedUnit.owner.name}
            </Text>
          </View>
        </View>

        <View style={styles.ownerContact}>
          <View style={styles.ownerContactContainer}>
            <Image
              style={styles.ownerContactImage}
              source={Images.Property.UserEmail}
              resizeMode="contain"
            />
            <Text style={[styles.ownerTitle, { paddingLeft: 23 }]}>
              {user.data.user.type == 'owner'
                ? selectedUnit.appoinment.auditor.email
                : selectedUnit.owner.email}
            </Text>
          </View>

          <View style={styles.ownerContactContainer}>
            <Image
              style={styles.ownerContactImage}
              source={Images.Property.UserCall}
              resizeMode="contain"
            />
            <Text style={[styles.ownerTitle, { paddingLeft: 23 }]}>
              {user.data.user.type == 'owner'
                ? selectedUnit.appoinment.auditor.mobile_number
                : selectedUnit.owner.mobile_number}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const _renderUnitDetail = props => {
    return (
      <View style={styles.badContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.srNo}>{props.arr[0].title}</Text>
          <Text style={styles.srNoText} numberOfLines={2}>
            {props.arr[0].value}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.srNo}>{props.arr[1].title}</Text>
          <Text
            style={[styles.srNoText, { textAlign: 'center' }]}
            numberOfLines={2}>
            {props.arr[1].value}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text style={styles.srNo}>{props.arr[2].title}</Text>
          <Text style={styles.srNoText} numberOfLines={2}>
            {props.arr[2].value}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading
        ?
        <ActivityHud />
        :
        selectedUnit && Object.keys(selectedUnit).length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <FastImage
              style={styles.image}
              source={{
                uri: selectedUnit.image.url,
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
            <View style={styles.detailModal}>
              <View style={styles.unitDetailView}>
                <View style={styles.indicatorHandle} />
                <Text style={styles.unitDetailText}>Unit Details</Text>
                <Text style={styles.appointMentAlreadyText}>
                  Appointment already Booked by Admin?
                </Text>
                <View style={styles.checkContainer}>
                  <Image
                    style={styles.checkImage}
                    source={
                      selectedUnit.appoinment 
                        ? Images.Property.CheckRound
                        : Images.Property.CrossRound
                    }
                  />
                  <Text style={styles.yesText}>
                    {selectedUnit.appoinment ? 'Yes' : 'No'}
                  </Text>
                </View>
                {selectedUnit.appoinment ? (
                  <Text style={styles.timeText}>
                    {getFormatedDate(
                      selectedUnit.appoinment.start,
                      'MMM DD, HH:MM A',
                    )}
                  </Text>
                ) : null}

                <View style={styles.border} />

                <View style={{ marginVertical: -15 }}>
                  {_renderUnitDetail({
                    arr: [
                      { title: 'Sr. No', value: selectedUnit.serial_number },
                      { title: 'Dwelling', value: selectedUnit.dwelling },
                      { title: 'Unit Type', value: selectedUnit.type },
                    ],
                  })}

                  {_renderUnitDetail({
                    arr: [
                      { title: 'Level', value: selectedUnit.level },
                      { title: 'Blinds/Fly', value: selectedUnit.blinds_fly },
                      { title: 'Car', value: selectedUnit.car },
                    ],
                  })}

                  {_renderUnitDetail({
                    arr: [
                      { title: 'Bedrooms', value: selectedUnit.beds },
                      { title: 'Bathrooms', value: selectedUnit.bath },
                      { title: 'Study', value: selectedUnit.study },
                    ],
                  })}

                  <View style={styles.furnishedContainer}>
                    <Text style={styles.furnishedText}>Adaptable</Text>
                    <Text style={styles.pricingText}>
                      {selectedUnit.adaptable === true ? 'Yes' : 'No'}
                    </Text>
                  </View>
                  <View style={styles.developerContainer}>
                    <Text style={styles.furnishedText}>Developer</Text>
                    <Text style={styles.pricingText}>
                      {selectedUnit.property.developer.name}
                    </Text>
                  </View>
                </View>

                {selectedUnit.appoinment != null
                  ? _renderAssignAuditor()
                  : null}
                <View style={styles.border} />

              </View>
              <View>
                {selectedUnit && selectedUnit.inclusions.length > 0 ? (
                  <>
                    <Text style={[styles.keyText, styles.unitDetailView]}>Inclusion</Text>
                    <FlatList
                      data={selectedUnit.inclusions}
                      renderItem={_renderKeyFeatureItem}
                      horizontal={true}
                      ItemSeparatorComponent={() => (
                        <View style={styles.keyFeatureSeparator} />
                      )}
                      contentContainerStyle={styles.keyFeatureContainer}
                      showsHorizontalScrollIndicator={false}
                      extraData={currentInclusion}
                    />
                  </>
                ) : null}
              </View>

              {/* {Object.keys(getSelectInclusion()).length > 0 ? (
              <View>
                <FlatList
                  data={[getSelectInclusion()]}
                  renderItem={_renderSelectedInclusions}
                  horizontal={true}
                  ItemSeparatorComponent={() => (
                    <View style={styles.keyFeatureSeparator} />
                  )}
                  contentContainerStyle={styles.inclusionContainer}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            ) : null} */}
            </View>
          </ScrollView>

        ) : null}
      {
        loading ? null :
          selectedUnit && selectedUnit.appoinment
            ?
            (
              <TouchableOpacity
                style={styles.startAppointMentBtn}
                onPress={() => {
                  startAudit()
                  
                }}>
                <Text style={styles.btText}>Start Appointment</Text>
              </TouchableOpacity>
            )
            :
            null
      }
    </SafeAreaView>
  );
}



const mapState = state => ({
  loading: state.loading.models.Property,
});

export default connect(mapState)(UnitDetail);