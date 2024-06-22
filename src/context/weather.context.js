import { createContext, useEffect, useState } from 'react';
import { DEFAULT_PLACE, UNITS, ENDPOINTS, MEASUREMENT_SYSTEMS } from '../utils';
import { getWeatherData } from '../api';

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyForecast, setDailyForecast] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState({});
  const [units, setUnits] = useState({});
  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_SYSTEMS.AUTO
  );

  useEffect(() => {
    async function getWeather() {
      setLoading(true);

      try {
        const cw = await getWeatherData(
          ENDPOINTS.CURRENT,
          place.place_id,
          measurementSystem
        );
        setCurrentWeather(cw.current);
        setUnits(UNITS[cw.units]);

        const df = await getWeatherData(
          ENDPOINTS.DAILY,
          place.place_id,
          measurementSystem
        );
        setDailyForecast(df.daily.data);

        const hf = await getWeatherData(
          ENDPOINTS.HOURLY,
          place.place_id,
          measurementSystem
        );
        setHourlyForecast(hf.hourly.data);

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getWeather();
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        loading,
        currentWeather,
        dailyForecast,
        hourlyForecast,
        units,
        measurementSystem,
        setMeasurementSystem,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
