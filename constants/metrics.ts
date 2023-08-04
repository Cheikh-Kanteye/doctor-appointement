import { Dimensions, PixelRatio } from "react-native";

export const { width, height } = Dimensions.get("window");
const scale = width / 320; // You can adjust the base width (320) according to your preference

const responsiveFontSize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const metrics = {
  typography: {
    heading1: responsiveFontSize(28),
    heading2: responsiveFontSize(24),
    heading3: responsiveFontSize(20),
    bodyText: responsiveFontSize(16),
    subtext: responsiveFontSize(14),
  },
  spacing: {
    small: 4 * scale,
    regular: 8 * scale,
    medium: 16 * scale,
    large: 24 * scale,
  },
};

export default metrics;
