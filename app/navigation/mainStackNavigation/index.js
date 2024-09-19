import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { ForecastScreen, HomeScreen, SplashScreen } from '../../screens'


const Stack = createStackNavigator()

export const MainStackNavigation = () => {

  const [showSplashScreen, setshowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 3000)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="weatherScreen" screenOptions={{
        headerShown: false
      }}>
        {
          showSplashScreen && (
            <Stack.Screen
              component={SplashScreen}
              name="splashScreen"
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
          )
        }
        <Stack.Screen
          component={HomeScreen}
          name="homeScreen"
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          component={ForecastScreen}
          name="forecastScreen"
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
