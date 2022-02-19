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
  kfImage: {
    height: 40,
    width: 40,
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
    bottom: 90,
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
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkImage: {
    width: 22,
    height: 22,
  },
  yesText: {
    fontSize: 16,
    fontFamily: FontFamily.Mont.SemiBold,
    marginLeft: 10,
    color: Theme,
  },
  timeText: {
    fontSize: 16,
    color: Theme,
    fontFamily: FontFamily.Mont.SemiBold,
    marginTop: 15,
  },
  border: {
    height: 0.8,
    backgroundColor: BorderColor,
    marginVertical: 25,
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
    lineHeight:20,
  },
  badContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  furnishedContainer: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  developerContainer: {
    marginTop: 35,
    marginBottom: 35,
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
    fontSize: 18,
    fontFamily: FontFamily.Mont.SemiBold,
    color: Theme,
  },
  viewTextContainer: {
    backgroundColor:'#D5CFF3', 
    borderRadius: 20, 
    height: 40, 
    width: 40, 
    justifyContent:'center', 
    alignItems:'center' 
  },
  circleViewText:{
    fontFamily: FontFamily.Mont.Heavy, 
    fontSize: 16
  },
  ownerHeader: {
    flexDirection: 'row',
  },
  ownerContactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  ownerContact: {
    marginLeft: 10,
    marginTop: 15,
  },
  ownerContactImage: {
    width: 20,
    height: 20,
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
  },
  ownerImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  keyText: {
    fontSize: 20,
    fontFamily: FontFamily.Mont.Bold,
    color: Theme,
  },
  notes: {
    fontSize: 20,
    fontFamily: FontFamily.Mont.Bold,
    color: Theme,
    paddingHorizontal: 20,
  },
  notesDes: {
    paddingHorizontal: 20,
    marginTop: 20,
    lineHeight: 20,
    fontSize: 14,
    fontFamily: FontFamily.Mont.Regular,
  },
  startAppointMentBtn: {
    backgroundColor: ButtonColor,
    height: 50,
    borderRadius: 25,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 50,
    position: 'absolute',
    width: '80%',
    bottom: 50,
  },
  btText: {
    fontSize: 17,
    color: 'white',
    fontFamily: FontFamily.Mont.Bold,
  },
  keyFeatureContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  keyFeatureSeparator: {paddingLeft: 10},
  keyFeatureItemView: {
    width: ScreenWidth * 0.38,
    height: ScreenWidth * 0.3,
    backgroundColor: '#D9FAEB',
    borderRadius: 10,
    paddingLeft: 10,
    padding: 15,
  },
  inclusionContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  itemInclusionContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    paddingHorizontal: 15,
    // justifyContent:'center'
  },
  itemInclusionItemText: {
    paddingHorizontal: 8,
    fontSize: 15,
    color: Theme,
    fontFamily: FontFamily.Mont.Regular,
  },
  itemInclusionItemImage: {
    width: 11,
    height: 11,
    tintColor: '#7763DC',
  },
  kfIamge: {
    width: 45,
    height: 45,
  },
  kfText: {
    fontSize: 15,
    color: 'black',
    marginTop: 15,
    fontFamily: FontFamily.Mont.Regular,
    maxWidth: '90%',
    lineHeight: 18,
  },
});
