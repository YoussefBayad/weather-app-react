import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Spinner from './components/Spinner';
import Undefained from './components/Undefained';

const App = (api) => {
  const [query, setQuery] = useState('london');
  const [weather, setWeather] = useState('');
  const [isLoading, setIsLoading] = useState('true');
  const getQuery = (q) => {
    setQuery(q);
  };
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=4819d5dc107da911cce2d0323fe09c03
      `
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setIsLoading(false);
      });
  }, [query]);
  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != 'undefined'
          ? weather.main.temp > 16
            ? 'app warm'
            : 'app'
          : 'app'
      }
    >
      <main>
        <Filter query={query} getQuery={(q) => getQuery(q)} />
        {isLoading ? (
          <Spinner />
        ) : typeof weather.main != 'undefined' ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          <Undefained />
        )}
      </main>
    </div>
  );
};

export default App;
