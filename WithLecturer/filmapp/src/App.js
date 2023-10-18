import { useState, useEffect } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
    const [weather, setWeather] = useState([]);
    const [temperature, setTemperature] = useState(0);
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(false);

    const getWeather = () => {
        fetch("https://localhost:7128/WeatherForecast")
            .then(res => res.json())
            .then(resJson => setWeather(resJson))
            .catch(error => console.log(error))
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const obj = {
            "temperatureC": temperature,
            "summary": description
        }

        fetch("https://localhost:7128/WeatherForecast", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(res => {
                console.log(res);
                if (res.status === 200 && res.ok) {
                    getWeather();
                    setStatus("ok");
                }
            })
            .catch(error => {
                console.log(error);
                setStatus(error);
            })
    }

    useEffect(() => {
        getWeather();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
          <form onSubmit={submitHandler}>
              { status && (status === "ok"
                  ? <h3 style={{color: "green"}}>Sukces, wysłano poprawnie!</h3>
                  : <h3 style={{color: "red"}}>Błąd, spróbuj ponownie!</h3>)}
              <div className="mb-3">
                  <label className="form-label">Opis pogody</label>
                  <input
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      type="text"
                      className="form-control"
                      aria-describedby="weatherHelp"
                  />
              </div>
              <div className="mb-3">
                  <label className="form-label">Temperatura</label>
                  <input
                      type="number"
                      className="form-control"
                      value={temperature}
                      onChange={e => setTemperature(parseInt(e.target.value))}
                  />
              </div>
              <button type="submit" className="btn btn-primary">Zapisz</button>
          </form>
          <ul>
              {
                  //date: '2023-10-06T19:31:41.3859614+02:00', temperatureC: 26, temperatureF: 78, summary: 'Mild'
                  weather.map((el, i) => <li key={i}>
                          <p>Temperatura dla dnia {el.date}</p>
                          <p>{el.temperatureC} C</p>
                          <p>Opis: {el.summary}</p>
                      </li>)
              }
          </ul>
      </header>

    </div>
  );
}

export default App;
