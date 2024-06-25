import { useRef } from 'react';
import HorizontalDraggable from './HorizontalDraggable';
import DayWidget from '../Components/DayWidget';
import HourWidget from '../Components/HourWidget';
import '../styles/components/Forecast.scss';

function Forecast({ type, title, data }) {
  const ref = useRef();

  return (
    <div className='Forecast'>
      <div className='forecast-container'>
        <h3>{title}</h3>
        <div className='widget-container' ref={ref}>
          {data.map((data, index) => (
            <HorizontalDraggable parent_ref={ref} key={index}>
              {type === 'daily' ? (
                <DayWidget data={data} />
              ) : (
                <HourWidget data={data} />
              )}
            </HorizontalDraggable>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
