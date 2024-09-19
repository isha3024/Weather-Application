import { getWeatherByCity } from "../../services/apiCalls";
import * as actions from "../Types";


export const searchCityWeather = (city) => async (dispatch) => {
  try {
    const weather = await getWeatherByCity(city);
    dispatch({
      type: actions.SEARCH_CITY,
      payload: weather,
    });
  } catch (error) {
    console.error("Error fetching city weather:", error);
  }
};

export const savePreviousSearch = (city) => {
  return {
    type: actions.SAVE_PREVIOUS_SEARCH,
    payload: city,
    }
}

export const clearPreviousSearches = () => ({
  type: actions.CLEAR_PREVIOUS_SEARCHES,
});