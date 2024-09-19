import React from 'react'
import { View, Text, Image } from 'react-native'

import { styles } from './styles'

export const CurrentWeatherCard = ({
  dateInWords,
  temperature,
  condition,
  icon
}) => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLarge}>{dateInWords}</Text>
      </View>
      <View style={styles.weatherContainer}>
        <View style={styles.weatherIcon}>
         {icon && (<Image source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }} style={styles.icon} />)} 
        </View>
        <Text style={styles.weatherCondition}>{condition}</Text>
        <Text style={styles.temprature}>{temperature}</Text>
      </View>
    </View>
  )
}