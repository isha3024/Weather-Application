import { StyleSheet } from "react-native";
import { color, fonts, fontSize, size } from "../../theme";

export const styles = StyleSheet.create({
  searchView: {
    paddingHorizontal: size.moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: size.moderateScale(5),
    height: size.moderateScale(50),
    width: '100%'
  },
  inputText: {
    flex: 1,
    fontSize: fontSize.littleMedium,
    fontFamily: fonts.montserratMedium,
    color: color.secondary,
    letterSpacing: size.moderateScale(1),
    backgroundColor: color.transparentWhite,
    paddingLeft: size.moderateScale(10),
    borderRadius: size.moderateScale(5),
    height: '100%',
  },
  searchIcon: {
    width: size.moderateScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.transparentWhite,
    borderRadius: size.moderateScale(5),
    height: '100%',
  },
})