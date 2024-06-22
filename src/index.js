import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/theme.context';
import { WeatherProvider } from './context/weather.context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </ThemeProvider>
  </React.StrictMode>
);
