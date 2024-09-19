import { StyleSheet } from "react-native";
import { color, fonts, fontSize, size } from "../../theme";

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: color.primary
  },
  topView: { 
    marginHorizontal: size.moderateScale(20),
    marginTop: size.moderateScale(20)
  },
  city: {
    fontSize: fontSize.large,
    fontFamily: fonts.montserratBold,
    color: color.secondary
  },
  todayDate: {
    fontSize: fontSize.smallMedium,
    color: color.secondary,
    fontFamily: fonts.montserratRegular
  },
  bottomView: {
    flex: 1,
    width: size.deviceWidth,
  },
  forecastList: {
    flex: 1,
    marginTop: size.moderateScale(20)
  }
})