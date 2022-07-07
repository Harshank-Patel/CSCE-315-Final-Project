import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import WeatherShow from "./WeatherShow";
import axios from "axios";

function Weather(props) {
  let cityName = props.cityName;

  const [weatherShowData, setWeatherShowData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/weather/" + encodeURIComponent(cityName), {})
      .then(function (response) {
        setWeatherShowData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [cityName]);

  return (
    <div className="Weather">
      <Container>
        <b>Weather</b> in {cityName}
        <hr />
        {isLoading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <WeatherShow dataWeather={weatherShowData} />
        )}
      </Container>
    </div>
  );
}

export default Weather;
