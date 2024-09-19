import axios from "axios";

const API_KEY = '4e8489847b9fdeefa1032b5781fd0ec0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const getWeatherData =  async () =>  {
  try {
    const response = await axios.get(`${BASE_URL}/weather?q=Vadodara&appid=${API_KEY}&units=metric`);
    return response.data;
  }
  catch (error) {
    console.error(error);
  }
} 

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  }
  catch (error) {
    console.log('Error fetching city weather:', error);
    throw error;
  }
}

export const getWeatherByLocation = async (lat, lon) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.log('Error fetching location weather in getWeatherByLocation:', error);
    throw error;
  }
}

export const forecastDetailByLocation = async (lat, lon) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.log('Error fetching location weather in forecastDetailByLocation:', error);
    throw error;
  }
}

export const forecastDetailByCity = async (city) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.log('Error fetching location weather in forecastDetailByCity:', error);
    throw error;
  }
}