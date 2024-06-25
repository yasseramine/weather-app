import { useContext, useState } from 'react';
import ThemeContext from '../context/theme.context';
import '../styles/components/Settings.scss';
import { MEASUREMENT_SYSTEMS, THEME_KEY } from '../utils';
import WeatherContext from '../context/weather.context';

function Settings() {
  const { dark, setDark } = useContext(ThemeContext);
  const { measurementSystem, setMeasurementSystem } =
    useContext(WeatherContext);
  const [openSettings, setOpenSettings] = useState(false);

  const changeMeasurementSystem = (system) => {
    setMeasurementSystem(system);
    setOpenSettings(false);
  };

  const changeTheme = () => {
    setDark((prevDark) => !prevDark);
    localStorage.setItem(THEME_KEY, JSON.stringify(!dark));
  };

  return (
    <div className='Settings'>
      <div className='theme-toggler' onClick={changeTheme}>
        <div className='theme-buttons'>
          <div className={`light-theme-btn ${dark ? '' : 'active'}`}>
            <i className='bi bi-sun'></i>
          </div>
          <div className={`dark-theme-btn ${dark ? 'active' : ''}`}>
            <i className='bi bi-moon'></i>
          </div>
        </div>
      </div>
      <div
        className='settings-btn'
        onClick={() => setOpenSettings((prev) => !prev)}
      >
        <i className={`bi bi-gear${openSettings ? '-fill' : ''}`}></i>
      </div>
      <div className={`settings-menu ${openSettings ? 'open' : ''}`}>
        <div className='measurement-systems'>
          <h4>Measurement Systems:</h4>
          <div className='systems'>
            {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
              <div
                className={`system ${
                  measurementSystem === system ? 'active' : ''
                }`}
                onClick={() => changeMeasurementSystem(system)}
                key={system}
              >
                {system}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
