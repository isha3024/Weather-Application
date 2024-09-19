import React, { useState } from 'react'
import { View, Text, StatusBar, FlatList } from 'react-native'

import { styles } from './styles'
import { color, size } from '../../theme';
import { ForecastCard } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

export const ForecastScreen = ({ route }) => {
  console.log(route.params.forecast);

  const [forecast, setForecast] = useState(route.params.forecast);

  const getCurrentDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date();
    const month = months[date.getMonth()].slice(0, 4);
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`
  }

  const formateDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    return `${weekday} ${day}`;
  }


  return (
    <View style={[styles.mainView, { marginTop: StatusBar.currentHeight }]}>
      <StatusBar backgroundColor={color.primary} barStyle='light-content' translucent={true} />
      <View style={styles.topView}>
        <Text style={styles.city}>{forecast?.city?.name}</Text>
        <Text style={styles.todayDate}>{getCurrentDate()}</Text>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.forecastList}>
          <FlatList
            data={forecast.list}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            ListFooterComponent={() => (<View style={{ paddingBottom: size.moderateScale(50) }} />)}
            renderItem={({ item }) => {
              const condition = item?.weather[0]?.description.length > 8 ? `${item?.weather[0]?.description.slice(0, 8) + '...'}` : item?.weather[0]?.description
              return (
                <ForecastCard
                  date={formateDate(item?.dt_txt)}
                  temprature={item?.main?.temp?.toFixed(0)}
                  wind={item?.wind?.speed}
                  icon={item?.weather[0]?.icon}
                  weatherCondition={condition.charAt(0).toUpperCase()
                    + condition.slice(1)}
                />
              )
            }
            }
          />
        </View>
      </View>
    </View>
  )
}