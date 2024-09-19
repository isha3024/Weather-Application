import { StyleSheet } from "react-native";
import { color, fonts, fontSize, size } from "../../theme";

export const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    marginRight: size.moderateScale(30)
  },
  weatherText: {
    fontSize: fontSize.littleMedium,
    color: color.secondary,
    fontFamily: fonts.montserratMedium,
    letterSpacing: size.moderateScale(1)
  },
  weatherInNum: {
    fontSize: fontSize.littleMedium,
    color: color.secondary,
    fontFamily: fonts.montserratSemiBold
  }, 
  iconView: {
    width: size.moderateScale(30),
    height: size.moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: size.moderateScale(10)
  }
})