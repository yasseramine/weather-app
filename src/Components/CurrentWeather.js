import WeatherIcon from './WeatherIcon';
import { useContext } from 'react';
import WeatherContext from '../context/weather.context';
import '../styles/components/CurrentWeather.scss';

function CurrentWeather() {
  const { currentWeather, units } = useContext(WeatherContext);

  const weatherWidgets = [
    {
      id: 0,
      icon: 'droplet',
      name: 'Precipitation',
      value: Math.round(currentWeather.precipitation.total),
      unit: units.precipitation,
    },
    {
      id: 1,
      icon: 'wind',
      name: 'Wind',
      value: Math.round(currentWeather.wind.speed),
      unit: units.wind_speed,
    },
    {
      id: 2,
      icon: 'moisture',
      name: 'Humidity',
      value: Math.round(currentWeather.humidity),
      unit: units.humidity,
    },
    {
      id: 3,
      icon: 'sunglasses',
      name: 'UV index',
      value: Math.round(currentWeather.uv_index),
      unit: units.uv_index,
    },
    {
      id: 4,
      icon: 'clouds-fill',
      name: 'Clouds cover',
      value: Math.round(currentWeather.cloud_cover),
      unit: units.cloud_cover,
    },
    {
      id: 5,
      icon: 'eye',
      name: 'Visibility',
      value: Math.round(currentWeather.visibility),
      unit: units.visibility,
    },
  ];

  return (
    <div className='CurrentWeather'>
      <div className='temperature'>
        <div className='weather-icon'>
          <WeatherIcon
            iconNumber={currentWeather.icon_num}
            alt={currentWeather.summary}
          />
        </div>
        <div className='value'>
          <div className='real'>
            {Math.round(currentWeather.temperature)}{' '}
            {units.temperature}
          </div>
          <div className='feels-like'>
            <small>
              feels like {Math.round(currentWeather.feels_like)}{' '}
              {units.temperature}
            </small>
          </div>
        </div>
        <div className='summary'>{currentWeather.summary}</div>
      </div>
      <div className='other-infos'>
        {weatherWidgets.map(({ id, icon, name, value, unit }) => (
          <WeatherWidget
            key={id}
            icon={icon}
            name={name}
            value={value}
            unit={unit}
          />
        ))}
      </div>
    </div>
  );
}

function WeatherWidget({ icon, value, name, unit }) {
  return (
    <div className={`${name} widget`}>
      <div className='widget-container'>
        <div className='info'>
          <div className='icon'>
            <i className={`bi bi-${icon}`}></i>
          </div>
          <div className='value'>
            {value} {unit}
          </div>
        </div>
        <div className='name'>{name}</div>
      </div>
    </div>
  );
}

export default CurrentWeather;
