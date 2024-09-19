import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import { color, lottieIcons, size } from '../../theme'
import { styles } from './styles'
import LottieView from 'lottie-react-native';


export const SplashScreen = () => {
  return (
    <View style={styles.mainView}>
      <StatusBar backgroundColor={color.primary} translucent={true} barStyle='light-content' />
        <LottieView 
          source={lottieIcons.splashIcon}
          autoPlay={true}
          loop={true}
          width={size.moderateScale(200)}
          height={size.moderateScale(200)}
        />
    </View>
  )
}
