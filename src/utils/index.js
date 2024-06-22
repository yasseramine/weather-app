export const ENDPOINTS = {
  CURRENT: 'current',
  DAILY: 'daily',
  HOURLY: 'hourly',
};
export const DEFAULT_PLACE = {
  name: 'London',
  place_id: 'london',
  adm_area1: 'England',
  adm_area2: 'Greater London',
  country: 'United Kingdom',
  lat: '51.50853N',
  lon: '0.12574W',
  timezone: 'Europe/London',
  type: 'settlement',
};
export const UNITS = {
  metric: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'm/s',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  us: {
    temperature: '°F',
    precipitation: 'in/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  uk: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  ca: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'km/h',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
};
export const MEASUREMENT_SYSTEMS = {
  AUTO: 'auto',
  METRIC: 'metric',
  UK: 'uk',
  US: 'us',
  CA: 'ca',
};
export const THEME_KEY = 'theme';
