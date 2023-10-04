import { useState, useEffect } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7128/WeatherForecast")
            .then(res => res.json())
            .then(resJson => setWeather(resJson))
            .catch(error => console.log(error))
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://a.allegroimg.com/original/03a045/779436ba4ad8a789b9e2304b2523/NAKLEJKA-NA-OKNO-LUSTRO-MEBLE-SZYBE-KACZOR-DONALD" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Generatory Aplikacji
              </a>
              <ul>
                  {
                      //date: '2023-10-06T19:31:41.3859614+02:00', temperatureC: 26, temperatureF: 78, summary: 'Mild'
                      weather.map((el) => <li>Temperatura dla dnia {el.date}: {el.temperatureC} C</li>)
                  }
              </ul>
      </header>

    </div>
  );
}

export default App;
