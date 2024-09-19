import { StyleSheet } from "react-native";
import { color, fonts, fontSize, size } from "../../theme";

export const styles = StyleSheet.create({
  mainContainer: {
    gap: size.moderateScale(0),
  },
  dateContainer: {
    alignItems: 'center',
  },
  dateLarge: {
    fontSize: fontSize.medium,
    color: color.secondary,
    fontFamily: fonts.montserratBold,
    letterSpacing: size.moderateScale(1)
  },
  weatherContainer: {
    alignItems: 'center'
  },
  weatherIcon: {
    width: size.moderateScale(80),
    height: size.moderateScale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: size.moderateScale(80),
    height: size.moderateScale(80),
  },
  weatherCondition: {
    fontSize: fontSize.medium,
    color: color.secondary,
    fontFamily: fonts.montserratSemiBold
  },
  temprature: {
    fontSize: size.moderateScale(45),
    color: color.secondary,
    fontFamily: fonts.montserratSemiBoldItalic
  }
})