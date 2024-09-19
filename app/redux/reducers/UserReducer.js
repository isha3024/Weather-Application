import * as actions from '../Types'

const initialState = {
  weatherData: null,
  previousSearches: [],
  forecast: []
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_CITY:
      return {
        ...state,
        weatherData: action.payload,
      };
    case actions.SAVE_PREVIOUS_SEARCH:
      const cityExists = state.previousSearches.includes(action.payload.toLowerCase());
      return {
        ...state,
        previousSearches: cityExists ? state.previousSearches : [...state.previousSearches, action.payload.toLowerCase()]
      };
    default:
      return state;
  }
}