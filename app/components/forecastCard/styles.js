import { StyleSheet } from "react-native";
import { color, fonts, fontSize, size } from "../../theme";

export const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    borderWidth: size.moderateScale(0.5),
    borderColor: color.secondary,
    paddingVertical: size.moderateScale(5),
    borderRadius: size.moderateScale(15),
    marginVertical: size.moderateScale(5),
    paddingHorizontal: size.moderateScale(10)
  },
  date: {
    fontSize: fontSize.small,
    fontFamily: fonts.montserratRegular,
    color: color.secondary
  },
  weatherCondition: {
    fontSize: fontSize.small,
    fontFamily: fonts.montserratRegular,
    color: color.secondary
  }, 
  iconView: {
    width: size.moderateScale(50),
    height: size.moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  temprature: {
    fontSize: fontSize.littleMedium,
    fontFamily: fonts.montserratRegular,
    color: color.secondary
  },
  wind: {
    fontSize: fontSize.verySmall,
    fontFamily: fonts.montserratRegular,
    color: color.secondary
  },
  windUnit: {
    fontSize: fontSize.verySmall,
    fontFamily: fonts.montserratRegular,
    color: color.secondary
  }
})