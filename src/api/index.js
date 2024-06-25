import axios from 'axios';
console.log(process.env.REACT_APP_WEATHER_API_KEY);
export async function getWeatherData(
  endpoint,
  place_id,
  measurementSystem
) {
  const options = {
    method: 'GET',
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      language: 'en',
      units: measurementSystem,
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_WEATHER_API_KEY,
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchPlaces(
  text,
  setSearchResults,
  setShowSearchResults
) {
  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
    params: {
      text,
      language: 'en',
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_WEATHER_API_KEY,
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const data = await response.data;
    setSearchResults(data);
    setShowSearchResults(data.length > 0);
  } catch (error) {
    console.error(error);
  }
}
