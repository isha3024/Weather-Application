import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
const context = createContext();

export const MainContextProvider = props => {

  const [currentCity, setCurrentCity] = useState('');
  const [location, setLocation] = useState(null)


  const value = useMemo(() => {
    return {
      currentCity: currentCity,
      setCurrentCity: setCurrentCity,
      location: location,
      setLocation: setLocation,
    }
  }, [
    currentCity, setCurrentCity,
    location, setLocation,
  ]);

  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export const useMainContext = () => {
  const value = useContext(context);
  if (value === undefined)
    throw new Error('Tried to use context without a provider');
  return value;
};
