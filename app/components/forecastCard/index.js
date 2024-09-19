import React from 'react'
import { View, Text, Image } from 'react-native'

import { styles } from './styles'

export const ForecastCard = ({icon, date, temprature, wind, weatherCondition}) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.date}>{date}</Text>
      {icon && (
        <View style={styles.iconView}><Image source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }} style={styles.icon}/></View>
      )}
      <Text style={styles.weatherCondition}>{weatherCondition}</Text>
      <Text style={styles.temprature}>{temprature} °C</Text>
      <Text style={styles.wind}>{wind}</Text>
      <Text style={styles.windUnit}>km/h</Text>
    </View>
  )
}
