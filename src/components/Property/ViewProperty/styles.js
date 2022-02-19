import {StyleSheet} from 'react-native';
import FontSize from '../../../utils/common/FontsSize';
import {
  BackGround,
  ScreenWidth,
  Theme,
  White,
  FontFamily,
  ThemeOpacity,
} from '../../../utils/common';

const horizontalPadding = 15;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BackGround,
  },
  viewStyle: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: White,
  },
  imageStyle: {
    height: 40,
    width: 300,
  },
  propertyTitle: {
    fontFamily: FontFamily.Mont.Bold,
    color: Theme,
    fontSize: 22,
    padding: 20,
  },
  propertyContainer: {
    position: 'absolute',
    marginHorizontal: 30,
    marginVertical: 30,
    justifyContent: 'space-between',
  },
  image: {
    marginLeft: 15,
    borderRadius: 15,
    //backgroundColor: 'red',
    width: ScreenWidth - horizontalPadding * 2,
    height: ScreenWidth * 0.8,
  },
  ownerImage: {
    marginLeft: 15,
    borderRadius: 15,
    //backgroundColor: 'red',
    width: ScreenWidth - horizontalPadding * 2,
    height: ScreenWidth * 0.6,
  },
  ownerPropertyOverlay: {
    marginLeft: 15,
    borderRadius: 15,
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(50, 50, 50, 0.5)',
    width: ScreenWidth - horizontalPadding * 2,
    height: ScreenWidth * 0.6,
  },
  propertyOverlay: {
    marginLeft: 15,
    borderRadius: 15,
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: ScreenWidth - horizontalPadding * 2,
    height: ScreenWidth * 0.8,
  },
  title: {
    fontSize: FontSize(24),
    fontFamily: FontFamily.Mont.Bold,
    color: 'white',
  },
  address: {
    fontSize: FontSize(16),
    fontFamily: FontFamily.Mont.Regular,
    lineHeight: 28,
    marginTop: 13,
    color: 'white',
  },
  typeContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: 30,
    borderRadius: 17,
  },
  type: {
    color: 'white',
    fontFamily: FontFamily.Mont.Regular,
    fontSize: FontSize(15),
  },
  viewUnitContainer: {
    paddingHorizontal: 17,
    paddingTop: 15,
    paddingBottom: 12,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    marginLeft: 30,
    top: ScreenWidth * 0.8 - 70,
    position: 'absolute',
    borderRadius: 25,
  },
  viewUnit: {
    fontSize: FontSize(16),
    fontFamily: FontFamily.Mont.Black,
    color: Theme,
  },
  srNoContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  srNo: {
    fontSize: 18,
    fontFamily: FontFamily.Mont.Regular,
    color: White,
  },
  srNoText: {
    fontSize: 20,
    fontFamily: FontFamily.Mont.SemiBold,
    color: White,
    marginTop: 10,
  },
});
