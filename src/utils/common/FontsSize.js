import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 320;

export default function FontSize(size) {
  const newSize = size * scale;

  return (Platform.OS === 'ios')
    ? Math.round(PixelRatio.roundToNearestPixel(newSize))
    : Math.round(PixelRatio.roundToNearestPixel(newSize) - 2);
}