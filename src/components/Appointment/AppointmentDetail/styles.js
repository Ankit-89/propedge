import {StyleSheet} from 'react-native';
import {
  ScreenWidth,
  FontFamily,
  DarkGreyUnit,
  ThemeOpacity,
  ThemeOpacity8,
  Theme,
  BorderColor,
  ButtonColor,
  Black,
  White,
  LightPurple,
} from '../../../utils/common';
import FontSize from '../../../utils/common/FontsSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    position: 'absolute',
    left: 0,
    marginTop: 10,
    marginLeft: 10,
    top: 0,
  },
  headerIcon: {
    height: 35,
    width: 35,
  },
  image: {
    height: 300,
  },
  detailModal: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 2,
    bottom: 40,
  },
  unitDetailView: {
    paddingHorizontal: 20,
  },
  indicatorHandle: {
    width: 75,
    height: 5,
    backgroundColor: DarkGreyUnit,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  unitDetailText: {
    fontSize: 20,
    color: Theme,
    fontFamily: FontFamily.Mont.Bold,
    marginTop: 25,
  },
  appointMentAlreadyText: {
    fontSize: 16,
    color: Theme,
    fontFamily: FontFamily.Mont.Regular,
    marginTop: 15,
    lineHeight: 25,
  },
  timeText: {
    fontSize: 16,
    color: Theme,
    fontFamily: FontFamily.Mont.Regular,
    marginTop: 30,
  },
  border: {
    height: 0.8,
    backgroundColor: BorderColor,
    marginVertical: 25,
  },
  bottomBorder: {
    height: 0.8,
    backgroundColor: BorderColor,
    marginTop: 20,
    marginVertical: 60,
  },
  srNoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  srNo: {
    fontSize: 14,
    fontFamily: FontFamily.Mont.Regular,
    color: ThemeOpacity,
  },
  srNoText: {
    fontSize: 16,
    fontFamily: FontFamily.Mont.SemiBold,
    color: Theme,
    marginTop: 10,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  badContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  furnishedContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pricingContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  realtorContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blindContainer: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  furnishedText: {
    fontSize: 16,
    fontFamily: FontFamily.Mont.Regular,
    color: Theme,
  },
  pricingText: {
    fontSize: 16,
    fontFamily: FontFamily.Mont.Regular,
    color: Theme,
  },
  blindText: {
    fontSize: 16,
    fontFamily: FontFamily.Mont.Regular,
    color: Theme,
  },
  pricingDesc: {
    fontSize: 16,
    fontFamily: FontFamily.Mont.SemiBold,
    color: Theme,
  },
  pricingAmount: {
    fontSize: 18,
    fontFamily: FontFamily.Mont.Bold,
    color: Theme,
  },
  blindDesc: {
    fontSize: 16,
    fontFamily: FontFamily.Mont.SemiBold,
    color: Theme,
  },
  ownerContainer: {
    flexDirection: 'row',
  },
  ownerTitle: {
    color: ThemeOpacity8,
    fontSize: 16,
    fontFamily: FontFamily.Mont.Regular,
  },
  ownerName: {
    color: Theme,
    fontSize: 18,
    fontFamily: FontFamily.Mont.SemiBold,
    marginTop: 10,
  },
  ownerDetails: {
    marginLeft: 20,
    marginTop: 5,
  },
  ownerEmail: {
    color: ThemeOpacity8,
    fontSize: 16,
    fontFamily: FontFamily.Mont.Regular,
  },
  ownerPhone: {
    color: ThemeOpacity8,
    fontSize: 16,
    fontFamily: FontFamily.Mont.Regular,
    marginTop: 15,
  },
  ownerNameIcon: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: LightPurple,
  },
  ownerInitail: {
    position: 'absolute',
    color: Theme,
    alignItems: 'center',
    padding: 10,
    paddingTop: 16,
    paddingLeft: 14,
    fontSize: FontSize(16),
    fontFamily: FontFamily.Mont.Bold,
  },
  startAppointMentBtn: {
    backgroundColor: ButtonColor,
    height: 50,
    width: '80%',
    borderRadius: 25,
    elevation: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 60,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 10,
  },
  btText: {
    fontSize: 17,
    color: White,
    fontFamily: FontFamily.Mont.Bold,
    alignSelf: 'center',
  },
  ownerMailContainer: {
    marginTop: 20,
    marginLeft: 12,
    flexDirection: 'row',
  },
  ownerMailImage: {
    width: 22,
    height: 15,
  },
  ownerPhoneImage: {
    width: 20,
    height: 20,
  },
  ownerPhoneContainer: {
    marginTop: 15,
    marginLeft: 12,
    flexDirection: 'row',
  },
  ownerMailDetails: {
    marginLeft: 30,
  },
  ownerPhoneDetails: {
    marginLeft: 30,
  },
  refreshIcon: {
    position: 'absolute',
    right: 0,
    marginTop: 10,
    marginRight: 30,
    top: 0,
    backgroundColor: White,
    width: 35,
    height: 35,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshIconImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  loader: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
