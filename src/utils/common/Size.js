import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ScreenWidth = width;
export const ScreenHeight = height;
export const IS_IOS = Platform.OS === 'ios';
export const definePlatform = ({ ios, android }) => (IS_IOS ? ios : android);
export const Font_8 = definePlatform({ ios: ScreenWidth * 0.025, android: ScreenWidth * 0.0225 });
export const Font_9 = definePlatform({ ios: ScreenWidth * 0.0275, android: ScreenWidth * 0.025 });
export const Font_10 = definePlatform({ ios: ScreenWidth * 0.03, android: ScreenWidth * 0.0275 });
export const Font_11 = definePlatform({ ios: ScreenWidth * 0.0325, android: ScreenWidth * 0.03 });
export const Font_12 = definePlatform({ ios: ScreenWidth * 0.035, android: ScreenWidth * 0.0325 });
export const Font_13 = definePlatform({ ios: ScreenWidth * 0.0375, android: ScreenWidth * 0.035 });
export const Font_14 = definePlatform({ ios: ScreenWidth * 0.04, android: ScreenWidth * 0.0375 });
export const Font_15 = definePlatform({ ios: ScreenWidth * 0.0425, android: ScreenWidth * 0.04 });
export const Font_3 = definePlatform({ ios: ScreenWidth * 0.045, android: ScreenWidth * 0.04 });
export const Font_16 = definePlatform({ ios: ScreenWidth * 0.0475, android: ScreenWidth * 0.0425 });
export const Font_17 = definePlatform({ ios: ScreenWidth * 0.05, android: ScreenWidth * 0.045 });
export const Font_18 = definePlatform({ ios: ScreenWidth * 0.0525, android: ScreenWidth * 0.0475 });
export const Font_19 = ScreenWidth * 0.0475;
export const Font_20 = ScreenWidth * 0.05;
export const Font_22 = ScreenWidth * 0.055;
export const Font_24 = ScreenWidth * 0.06;
export const Font_28 = ScreenWidth * 0.075;
export const Font_32 = ScreenWidth * 0.08;
export const Font_36 = ScreenWidth * 0.09;