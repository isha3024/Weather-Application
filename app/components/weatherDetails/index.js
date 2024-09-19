import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export const WeatherDetails = ({icon, weatherType, weather}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.iconView}>{icon()}</View>
      <Text style={styles.weatherText}>{weatherType}</Text>
      <Text style={styles.weatherInNum}>{weather}</Text>
    </View>
  )
}
