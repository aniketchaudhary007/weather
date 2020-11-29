import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      weatherInfo: {},
    };
  }

  getWeather = (event) => {
    const { cityName } = this.state;

    event.preventDefault();
    fetch(`http://api.weatherapi.com/v1/current.json?key=7e26a42064b3422aad8173714202911&q=${cityName}`)
    .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            weatherInfo: result,
          });
        },
      )
  }

  getCityName = (event) => {
    this.setState({
      cityName: event.target.value,
    })
  }

  renderWeatherInformation = () => {
    const { weatherInfo } = this.state;

    if (Object.keys(weatherInfo).length === 0 ) {
      return null;
    }

    if (weatherInfo.error) {
      return (
        <div className="table">
          <div className="error">
            No matching location found.
          </div>
        </div>
      )
    }

    return (
      <div className="table">
        <div className="main">
          {weatherInfo.current.temp_c}&deg;C
          <span className="location">
            {weatherInfo.location.name}, {weatherInfo.location.country}
          </span>
        </div>
        <div className="metaData">
          <div className="metaDataTable">
            <div className="row">
              <div className="column">Localtime</div>
              <div className="column">{weatherInfo.location.localtime}</div>
            </div>
            <div className="row">
              <div className="column">Feels like</div>
              <div className="column">{weatherInfo.current.feelslike_c}&deg;C</div>
            </div>
            <div className="row">
              <div className="column">Humidity</div>
              <div className="column">{weatherInfo.current.humidity}&#37;</div>
            </div>
            <div className="row">
              <div className="column">Wind speed</div>
              <div className="column">{weatherInfo.current.wind_kph}kmph</div>
            </div>
            <div className="row">
              <div className="column">Precipitation</div>
              <div className="column">{weatherInfo.current.precip_mm}mm</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { cityName } = this.state;

    return (
      <div className="App">
        <h1>What's the Weather?</h1>
        <form onSubmit={this.getWeather}>
          <input
            type="textbox"
            autoFocus
            placeholder="Enter the name of the city"
            value={cityName}
            onChange={this.getCityName}
          />
          <button>Find</button>
          {
            this.renderWeatherInformation()
          }
        </form>
      </div>
    );
  }
}

export default App;
