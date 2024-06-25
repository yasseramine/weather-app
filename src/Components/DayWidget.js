import { useContext } from 'react';
import WeatherContext from '../context/weather.context';
import WeatherIcon from './WeatherIcon';

export default function DayWidget({ data }) {
  const { units } = useContext(WeatherContext);

  let {
    day,
    icon,
    summary,
    temperature_max,
    temperature_min,
    precipitation,
  } = data;

  // Weather date
  const locale = navigator.language;
  let weather_date = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
  }).format(new Date(day));
  const weather_day = new Date(day).getDate();
  const today = new Date().getDate();
  day = today === weather_day ? 'Today' : weather_date;

  return (
    <div className='widget'>
      <div className='day'>{day}</div>
      <div className='icon-temp'>
        <WeatherIcon iconNumber={icon} alt={summary} />
        <div className='temperature'>
          <div className='max'>
            <b>
              {Math.round(temperature_max)} {units.temperature}
            </b>
          </div>
          <div className='min'>
            {Math.round(temperature_min)} {units.temperature}
          </div>
        </div>
      </div>
      <div className='precipitation'>
        <i className='bi bi-droplet'></i>{' '}
        {Math.round(precipitation.total)} {units.precipitation}
      </div>
    </div>
  );
}
