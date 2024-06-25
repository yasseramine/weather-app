import { useContext, useState } from 'react';
import WeatherContext from '../context/weather.context';
import { searchPlaces } from '../api';
import '../styles/components/Search.scss';

function Search() {
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { setPlace } = useContext(WeatherContext);

  function onSearch(e) {
    setText(e.target.value);
    searchPlaces(
      e.target.value,
      setSearchResults,
      setShowSearchResults
    );
  }

  function selectPlace(place) {
    setPlace(place);
    setShowSearchResults(false);
    setText('');
  }

  return (
    <>
      <div className='search-container'>
        <div className='search-icon'>
          <i className='bi bi-search'></i>
        </div>
        <div className='search-input'>
          <input
            type='text'
            name='search-city'
            placeholder='Search city ...'
            value={text}
            onChange={onSearch}
          />
        </div>
      </div>
      {showSearchResults && (
        <div className='search-results'>
          <div className='results-container'>
            {searchResults.map((place) => (
              <div
                className='result'
                key={place.place_id}
                onClick={() => selectPlace(place)}
              >
                {place.name}, {place.adm_area1}, {place.country}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
