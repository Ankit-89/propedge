import {StyleSheet} from 'react-native';
import {
  BackGround,
  FontFamily,
  DarkGrey,
  White,
  Theme,
} from '../../utils/common';
import FontSize from '../../utils/common/FontsSize';

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
  settingsStyle: {
    backgroundColor: BackGround,
  },
  settingsTextStyle: {
    fontFamily: FontFamily.Mont.Bold,
    color: Theme,
    fontSize: 22,
    padding: 20,
  },
  subTextStyle: {
    fontFamily: FontFamily.Mont.Regular,
    color: Theme,
    marginLeft: 15,
    fontSize: 18,
    lineHeight: 18,
  },
  imageStyle: {
    height: 40,
    width: 300,
  },
  iconStyle: {
    height: 28,
    width: 28,
  },
  iconStyleNext: {
    marginRight: 5,
    height: 25,
    width: 25,
  },
  notificationContainer: {
    height: 90,
    backgroundColor: White,
    borderColor: DarkGrey,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 45,
  },
  notificationTextView: {
    marginLeft: 20,
    flex: 1,
  },
  notificationText: {
    fontSize: FontSize(14),
    color: Theme,
    fontFamily: FontFamily.Mont.SemiBold,
    maxWidth: '95%',
    lineHeight: 18,
  },
  timeText: {
    fontSize: FontSize(11),
    color: Theme,
    fontFamily: FontFamily.Mont.Light,
    marginTop: 10,
  },
  footer: {
    marginBottom: 10,
  },
  separator: {
    marginVertical: 3,
  },
});
