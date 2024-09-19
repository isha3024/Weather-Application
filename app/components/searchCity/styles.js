import { StyleSheet } from "react-native";
import { color, fonts, fontSize, size } from "../../theme";

export const styles = StyleSheet.create({
  mainView: {
    padding: size.moderateScale(20),
  },
  contentContainerStyle: {
  },
  text: {
    borderBottomWidth: size.moderateScale(0.5),
    borderBottomColor: color.secondary,
    paddingVertical: size.moderateScale(10),
    fontSize: fontSize.littleMedium,
    fontFamily: fonts.montserratRegular
  }
})