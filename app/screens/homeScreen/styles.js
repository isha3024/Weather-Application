import { StyleSheet } from "react-native";
import { color, fonts, fontSize, size } from "../../theme";

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: color.primary,
  },
  keyboardView: {
    flex: 1,
  },
  topView: {
    marginTop: size.moderateScale(20),
    flexDirection: 'column'
  },
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
  previousSearch: {
    position: 'absolute',
    top: size.moderateScale(55),
    right: size.moderateScale(0),
    left: size.moderateScale(0),
    marginHorizontal: size.moderateScale(20),
    backgroundColor: color.lightGray,
    borderRadius: size.moderateScale(5),
    padding: size.moderateScale(10),
    zIndex: size.moderateScale(10)
  },
  middleView: {
    paddingHorizontal: size.moderateScale(20),
    gap: size.moderateScale(25),
    marginVertical: size.moderateScale(30),
    flex: 1,
    justifyContent: 'center'
  },
  currentCityView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: size.moderateScale(8)
  },
  currentCityText: {
    fontSize: fontSize.middleSmallMedium,
    color: color.secondary,
    fontFamily: fonts.montserratMedium
  },
  noLocationView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: size.moderateScale(30),
  },
  errorText: {
    fontSize: fontSize.medium,
    color: color.secondary,
    fontFamily: fonts.montserratMedium,
    textAlign: 'center',
    marginBottom: size.moderateScale(20),
  },
  button: {
    backgroundColor: color.secondary,
    paddingVertical: size.moderateScale(15),
    borderRadius: size.moderateScale(5),
    margin: size.moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    width: size.moderateScale(200)
  },
  buttonText: {
    color: color.primary,
    fontSize: fontSize.middleMedium,
    fontFamily: fonts.montserratSemiBold,
    letterSpacing: size.moderateScale(1)
  },
  weatherDetails: {

  },
  contentContainerStyle: {

  },
  bottomView: {
    gap: size.moderateScale(20),
    marginBottom: size.moderateScale(30)
  },
  bottomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.moderateScale(20),
  },
  headerText: {
    fontSize: fontSize.medium,
    fontFamily: fonts.montserratSemiBold,
    color: color.secondary
  },
  link: {
    color: color.secondary,
    textDecorationLine: 'underline',
    textDecorationColor: color.secondary,
    fontSize: fontSize.smallMedium,
    fontFamily: fonts.montserratRegular
  },
  bottomContent: {
    backgroundColor: color.transparentWhite,
    padding: size.moderateScale(20),
    marginHorizontal: size.moderateScale(20),
    borderRadius: size.moderateScale(15)
  },
  contentContainerStyleFlatList: {
    gap: size.moderateScale(30)
  }
})