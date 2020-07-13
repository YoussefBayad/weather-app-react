import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';

const api = {
  key: '7d4ef5d23648c7c62acd3ccfa1a0a30b',
  base: 'https://api.openweathermap.org/data/2.5/',
};
const App = (api) => {
  const [query, setQuery] = useState('');
  const [Weather, setWeather] = useState('london');
  const getQuery = (q) => {
    setQuery(q);
  };
  useEffect(() => {
    console.log('use effect runs');

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=4819d5dc107da911cce2d0323fe09c03
      `
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }, [query]);

  return (
    <div className="app">
      <main>
        <Filter query={query} getQuery={(q) => getQuery(q)} />
        <div>
          <div className="location-box">
            <div className="location">Bir Jdid</div>
            <div className="date">Monday 11 July 2020 </div>
          </div>
          <div className="weather-box">
            <div className="temp">30°C</div>
            <div className="weather">Sunny</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
