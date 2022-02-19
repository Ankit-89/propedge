import { StyleSheet, PixelRatio } from 'react-native';

import colors from './colors';

import { width, height } from './metrics';

import normalize from './normalize';

export const LOGO_WIDTH = width * 0.8;
export const LOGO_HEIGHT = 50;

export const SLIDER_WIDTH = width;
export const ITEM_WIDTH = SLIDER_WIDTH;
export const ITEM_HEIGHT = '100%';

export const DONE_BUTTON_WIDTH = width - 65;
export const NEXT_BUTTON_WIDTH = width * 0.40;
export const PREVIOUS_BUTTON_WIDTH = width * 0.35;

export const BTN_HEIGHT = normalize(50);
export const BTN_MARGIN = normalize(24);
export const BTN_DISTANCE = normalize(4);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lighter,
  },
  logoView: {
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    marginVertical: normalize(24),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  logo: {
    marginTop: '5%',
    width: '100%',
    height: '100%',
  },
  carouselContainer: {},
  carouselContentContainer: {
    alignItems: 'center',
  },
  firstPage: {
    backgroundColor: '#CBDFF3',
  },
  secondPage: {
    backgroundColor: '#ECE5CC',
  },
  thirdPage: {
    backgroundColor: '#E7EFD5',
  },
  itemContainer: {
    width: Math.round(SLIDER_WIDTH * 0.78),
    marginTop: height * 0.10,
    zIndex: 2,
    alignSelf: 'center',
    borderRadius: ITEM_WIDTH / 20,
    overflow: 'hidden',
    flex: 1,
    lineHeight: 28,
    justifyContent: height > 640 ? 'flex-start' : 'space-evenly',
  },
  counter: {
    marginTop: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    flex: 0.3,
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 28,
    color: colors.darker,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: '300',
    fontSize: 15,
    color: colors.dark,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  bannerImage: {
    resizeMode: 'contain',
    flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bold: { fontWeight: 'bold' },
  paginationContainer: {},
  dotStyle: {
    width: normalize(32),
    height: normalize(10),

    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  inactiveDotStyle: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: 16,
    backgroundColor: colors.light,
    marginHorizontal: -8,
  },
  buttonContainer: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  nextButton: {
    width: NEXT_BUTTON_WIDTH,
    height: BTN_HEIGHT,
    marginLeft: 'auto',
    marginRight: BTN_MARGIN,
    marginBottom: BTN_MARGIN,
    justifyContent: 'center',
    marginLeft: 2,
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: Math.round(NEXT_BUTTON_WIDTH / 1),
    zIndex: 1,
  },
  previousButton: {
    width: NEXT_BUTTON_WIDTH,
    height: BTN_HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: BTN_MARGIN,
    marginRight: BTN_DISTANCE,
    marginBottom: BTN_MARGIN,
    marginRight: 2,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: colors.secundary,
    borderRadius: Math.round(NEXT_BUTTON_WIDTH / 1),
    zIndex: 1,
  },
  doneButton: {
    width: DONE_BUTTON_WIDTH,
    height: BTN_HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: BTN_MARGIN,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.secundary,
    borderRadius: Math.round(DONE_BUTTON_WIDTH / 1),
    zIndex: 1,

  },
  buttonText: {
    fontSize: PixelRatio.getFontScale() > 1.7 ? 16 : 18,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextStarted: {
    fontSize: PixelRatio.getFontScale() > 1.7 ? 16 : 18,
    color: colors.black,
    fontWeight: '900',
    textAlign: 'center',
  },
});
