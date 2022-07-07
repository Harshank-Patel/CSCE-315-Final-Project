// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { Container, Card, Spinner, Image } from "react-bootstrap";

function WeatherCard(props) {
  let cardWeatherColor;
  switch (props.data.weatherInfo[0].main) {
    case "Clear":
      cardWeatherColor = "warning";
      break;
    case "Clouds":
      cardWeatherColor = "secondary";
      break;
    case "Thunderstorm":
      cardWeatherColor = "danger";
      break;
    case "Rain":
      cardWeatherColor = "info";
      break;
    case "Drizzle":
      cardWeatherColor = "success";
      break;
    default:
      cardWeatherColor = "primary";
      break;
  }

  return (
    <div className="WeatherCard">
      <Container className="text-center">
        <Card border={cardWeatherColor}>
          <Card.Header>
            <b>Temperature: </b> {props.data.mainInfo.temp} °F
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <b>{props.data.weatherInfo[0].main}</b>{" "}
              <Image src={props.data.url}></Image>
            </Card.Title>
            <Card.Text>
              <p>
                <b>Feels like: </b> {props.data.mainInfo.feels_like} °F
              </p>
              <p>
                <b>Low: </b> {props.data.mainInfo.temp_min} °F
              </p>
              <p>
                <b>High: </b> {props.data.mainInfo.temp_max} °F
              </p>
              <p>
                <b>Humidity: </b> {props.data.mainInfo.humidity} %
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

function WeatherShow(props) {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setWeatherData(props.dataWeather);
    // console.log("Child weather", weatherData);
    // console.log("Size", Object.keys(weatherData).length);
    if (Object.keys(weatherData).length > 0) {
      setLoading(false);
    }
  }, [weatherData, props.dataWeather]);

  return (
    <div className="WeatherShow">
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <WeatherCard data={weatherData} />
      )}
    </div>
  );
}

export default WeatherShow;
