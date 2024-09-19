import { StyleSheet } from 'react-native';
import { color, size } from '../../theme';

export const styles = StyleSheet.create({
  mainView: {
    zIndex: 100000,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: size.deviceHeight,
    width: size.deviceWidth * 2,
    position: 'absolute',
    transform: [{ scale: 2 }],
  },
  lottieImage: {
    height: size.moderateScale(50),
    width: size.moderateScale(70),
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  }
})
