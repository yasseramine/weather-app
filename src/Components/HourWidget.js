import { useContext } from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherContext from '../context/weather.context';

export default function HourWidget({ data }) {
  const { units } = useContext(WeatherContext);
  const { date, icon: iconNumber, temperature, wind, precipitation } = data;

  // Weather date
  const locale = navigator.language;
  let weather_date = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    weekday: 'short',
    month: '2-digit',
  }).format(new Date(date));

  // hours and days
  let hour = new Date(date).getHours();
  let day = new Date(date).getDay();
  const now_hour = new Date().getHours();
  const today = new Date().getDay();

  // format hour
  hour =
    hour === now_hour && day === today
      ? 'Now'
      : hour < 10
      ? `0${hour}:00`
      : `${hour}:00`;

  // format days
  day =
    day === today && hour === 'Now'
      ? 'Today'
      : hour === '00:00'
      ? weather_date
      : '';

  return (
    <div className='widget'>
      {day && <div className='day'>{day}</div>}
      <div className='hour'>{hour}</div>
      <div className='icon-temp'>
        <div className='icon'>
          <WeatherIcon iconNumber={iconNumber} />
        </div>
        <div className='temperature'>
          {Math.round(temperature)} {units.temperature}
        </div>
      </div>
      <div className='precipitation'>
        <i className='bi bi-droplet'></i> {Math.round(precipitation.total)}{' '}
        {units.precipitation}
      </div>
      <div className='wind'>
        <div className='speed'>
          {Math.round(wind.speed)} {units.wind_speed}
        </div>
        <div
          className='wind-dir'
          style={{ transform: `rotate(${-45 + wind.angle}deg)` }}
        >
          <i className='bi bi-send-fill'></i>
        </div>
      </div>
    </div>
  );
}
