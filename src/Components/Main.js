import { useContext } from 'react';
import CurrentWeather from './CurrentWeather';
import WeatherContext from '../context/weather.context';
import Forecast from './Forecast';
import '../styles/components/Main.scss';

function Main() {
  const { loading, dailyForecast, hourlyForecast } =
    useContext(WeatherContext);

  return (
    <div className='Main'>
      {!loading && (
        <>
          <CurrentWeather />
          <Forecast
            type='hourly'
            title='HOURLY FORECAST'
            data={hourlyForecast}
          />
          <Forecast
            type='daily'
            title='21 DAYS FORECAST'
            data={dailyForecast}
          />
        </>
      )}
    </div>
  );
}

export default Main;
