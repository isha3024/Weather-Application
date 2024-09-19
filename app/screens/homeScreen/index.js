import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StatusBar, Platform, PermissionsAndroid, ScrollView, KeyboardAvoidingView, TouchableOpacity, FlatList, Keyboard, Linking, Alert } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { CurrentWeatherCard, ForecastCard, Loader, SearchCity, SearchField, WeatherDetails } from '../../components'
import { IcHumidity, IcLocation, IcPressure, IcSeaLevel, IcSearch, IcTemprature, IcWind } from '../../theme'
import { color } from '../../theme'
import { forecastDetailByCity, forecastDetailByLocation, getWeatherByCity, getWeatherByLocation } from '../../services/apiCalls'
import { styles } from './styles'
import { useMainContext } from '../../contexts'
import { savePreviousSearch, searchCityWeather } from '../../redux/actions/UserActions'

export const HomeScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather.weatherData);
  const previousSearches = useSelector(state => state.weather.previousSearches);

  const { location, setLocation } = useMainContext();
  const [searchCity, setSearchCity] = useState('');
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forecastLoading, setForescastLoading] = useState(false);
  const [weather, setWeather] = useState(weatherData);
  const [forecast, setForecast] = useState([])
  const [showPreviousSearches, setShowPreviousSearches] = useState(false);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Permission',
            message: 'We need to access to your location to show the weather for your current location.',
            buttonNeutral: 'Ask me later',
            buttonNegative: 'Cancel',
            buttonPositive: 'Ok'
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Location permission granted");
          setHasLocationPermission(true);
        }
        else {
          console.log("Location permission denied");
          setHasLocationPermission(false);
        }
      }
    } catch (error) {
      console.log("Error requesting permission: ", error)
    }
  }

  const checkLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted) {
          setHasLocationPermission(true);
          getCurrentLocation();
        } else {
          setHasLocationPermission(false);
        }
      }
    } catch (error) {
      console.log("Error checking permission: ", error)
    }
  }

  const getCurrentLocation = async () => {
    if (hasLocationPermission) {
      setLoading(true);
      try {
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation(position.coords);
            setLoading(false);
          },
          (error) => {
            setLoading(false);
            console.log('Unable to fetch location.', error);
            console.log('Unable to fetch location. Please check your settings.');
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } catch (error) {
        console.log("Error fetching Location: ", error);
      }
    }
  };


  const getCurrentDate = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date();
    const month = months[date.getMonth()].slice(0, 4);
    const day = date.getDate();

    return `${month} ${day < 10 ? `0${day}` : day}`;
  }

  const handleGetCurrentLocationWeather = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          setLoading(true);
          const weather = await getWeatherByLocation(latitude, longitude);
          setWeather(weather);
          setLoading(false)
        } catch (error) {
          console.log('Error', 'Unable to fetch weather for current location', error);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.log('Error', 'Permission to access location was denied');
        setLoading(false);
      }
    );
  };

  const handleGetForecastWeather = () => {
    setForescastLoading(true);
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const forecast = await forecastDetailByLocation(latitude, longitude);
          setForecast(forecast || []);
          setForescastLoading(false);
        } catch (error) {
          console.log("forecast error: ", error)
          setForescastLoading(false);
        } finally {
          setForescastLoading(false);
        }
      },
      (error) => {
        setForescastLoading(false);
      }
    );
  };

  const showCityForecast = async (city) => {
    try {
      const forecast = await forecastDetailByCity(city);
      setForecast(forecast || []);
    } catch (error) {
      console.log("forecast error: ", error);
    } finally {
      setForescastLoading(false);
    }
  };


  const formateDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    return `${weekday} ${day}`;
  }

  const handleSearchCity = () => {
    if (searchCity) {
      Keyboard.dismiss()
      setLoading(true);
      try {
        dispatch(searchCityWeather(searchCity));
        dispatch(savePreviousSearch(searchCity));
        showCityForecast(searchCity)
        setShowPreviousSearches(false);
      } catch (error) {
        console.log("Error searching by city: ", error);
      } finally {
        setLoading(false);
      }
    }
    else {
      Alert.alert(
        'Alert!!', 'Please enter a city name');
      return;
    }
  };

  useEffect(() => {
    checkLocationPermission()
  }, [])

  useEffect(() => {
    if (hasLocationPermission) {
      handleGetCurrentLocationWeather();
      handleGetForecastWeather();
    }
  }, [hasLocationPermission])

  useEffect(() => {
    setWeather(weatherData);
  }, [weatherData]);

  return (
    <View style={[styles.mainView, { marginTop: StatusBar.currentHeight }]}>
      <StatusBar translucent={true} barStyle='light-content' backgroundColor={color.primary} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        {
          hasLocationPermission
            ? (
              <>
                {loading
                  ? (<Loader />)
                  : (
                    <ScrollView
                      contentContainerStyle={{ flexGrow: 1 }}
                      keyboardShouldPersistTaps='handled'
                    >
                      <View style={styles.topView}>
                        <SearchField
                          style={styles.inputText}
                          value={searchCity}
                          onChangeText={(txt) => setSearchCity(txt)}
                          placeholder='Search for city ...'
                          onFocus={() => setShowPreviousSearches(true)}
                          onBlur={() => setShowPreviousSearches(false)}
                          renderIcon={() => (<IcSearch />)}
                          onPress={handleSearchCity}
                        />

                        {showPreviousSearches && previousSearches.length > 0 &&
                          (
                            <View style={styles.previousSearch}>
                              <SearchCity previousSearches={previousSearches} onPress={(city) => {
                                console.log("Selected city: ", city);  // Logs the selected city
                                setSearchCity(city);  // Set the selected city in the search field
                                handleSearchCity();  // Calls the search function
                              }} />
                            </View>
                          )
                        }
                      </View>
                      <View style={styles.middleView}>
                        <View style={styles.currentCityView}>
                          <IcLocation />
                          <Text style={styles.currentCityText}>{weather?.name}</Text>
                        </View>
                        <CurrentWeatherCard
                          dateInWords={getCurrentDate()}
                          condition={weather?.weather[0]?.main}
                          icon={weather?.weather[0]?.icon}
                          temperature={weather?.main?.temp?.toFixed(0) + ' °C'}
                        />
                        <View style={styles.weatherDetails}>
                          <ScrollView
                            horizontal
                            contentContainerStyle={styles.contentContainerStyle}
                            showsHorizontalScrollIndicator={false}
                          >
                            <WeatherDetails icon={() => (<IcHumidity />)} weatherType='Humidity' weather={weather?.main?.humidity} />
                            <WeatherDetails icon={() => (<IcWind />)} weatherType='Wind' weather={weather?.wind?.speed + ' km/h'} />
                            <WeatherDetails icon={() => (<IcTemprature />)} weatherType='Feels like' weather={weather?.main?.feels_like + ' °'} />
                            <WeatherDetails icon={() => (<IcPressure />)} weatherType='Pressure' weather={weather?.main?.pressure + ' Pa'} />
                            <WeatherDetails icon={() => (<IcSeaLevel />)} weatherType='Sea level' weather={weather?.main?.sea_level} />
                          </ScrollView>
                        </View>
                      </View>
                      <View style={styles.bottomView}>
                        <View style={styles.bottomHeader}>
                          <Text style={styles.headerText}>Forecast</Text>
                          <TouchableOpacity onPress={() => navigation.navigate('forecastScreen', { forecast: forecast })}>
                            <Text style={styles.link}>Show all forecasts</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.bottomContent}>
                          {
                            forecastLoading
                              ? (<Loader />)
                              : (
                                <FlatList
                                  data={(forecast?.list || []).slice(0, 5)}
                                  horizontal={true}
                                  showsHorizontalScrollIndicator={false}
                                  keyExtractor={(item) => item?.dt_txt}
                                  contentContainerStyle={styles.contentContainerStyleFlatList}
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
                                  }}
                                />
                              )
                          }
                        </View>
                      </View>
                    </ScrollView>
                  )
                }
              </>
            )
            : (
              <View style={styles.noLocationView}>
                <Text style={styles.errorText}>
                  To view the weather for your current location, you need to enable location services.
                </Text>
                <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
                  <Text style={styles.buttonText}>Enable Location</Text>
                </TouchableOpacity>
              </View>
            )
        }
      </KeyboardAvoidingView>
    </View>
  )
}