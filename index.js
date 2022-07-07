const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios").default;
const yelp = require("yelp-fusion");
const client = yelp.client(
  "MpSuTJD3DaTctvZJx2kcpb2Cagn5DlHp1TW85JB4usCjskg77wG8coOKGFhgjXfoclix7n-36Lh03AT8_FSl9KUMLEuIio6QOPCM4qmfb_ocmTDQzvSJkQsUUl-DYHYx"
);
dotenv.config();

function dateGenerator() {
  var date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  return year + "-" + month + "-" + date;
}

function decodeQueryParam(p) {
  // console.log(encodeURIComponent("San Francisco"));
  return decodeURIComponent(p.replace(/\+/g, " "));
}

app.get("/food/:city", function (req, res) {
  let city = decodeQueryParam(req.params.city);
  // let city = req.query.city;
  // let cityName = req.params.city;
  // See http://www.yelp.com/developers/documentation/v2/search_api
  client
    .search({
      location: city,
    })
    .then((response) => {
      //console.log(response.jsonBody.businesses[0].name);
      res.send(response.jsonBody);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.get("/news/:city", function (req, res) {
  let endpoint = "https://newsapi.org/v2/everything";
  let date = dateGenerator();
  let keyWord = decodeQueryParam(req.params.city);
  let sortByType = "popularity";
  axios
    .get(endpoint, {
      params: {
        q: keyWord,
        soryBy: sortByType,
        from: date,
      },
      headers: {
        "x-api-key": process.env.newsAPIKey,
      },
    })
    .then(function (response) {
      res.send(response.data.articles);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});

app.get("/weather/:city", function (req, res) {
  let endpoint = "https://api.openweathermap.org/data/2.5/weather";
  let keyWord = decodeQueryParam(req.params.city);
  axios
    .get(endpoint, {
      params: {
        q: keyWord,
        units: "imperial",
        appid: process.env.weatherAPIKey,
      },
    })
    .then(function (response) {
      // console.log(response.data.main);
      // console.log(response.data.weather);
      let responseToBeSent = {};
      responseToBeSent["mainInfo"] = response.data.main;
      responseToBeSent["weatherInfo"] = response.data.weather;
      responseToBeSent["url"] =
        "http://openweathermap.org/img/wn/" +
        response.data.weather[0]["icon"] +
        "@2x.png";
      res.send(responseToBeSent);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      //always executed
    });
});

// <--------------------------------------- DO NOT CHANGE BELOW THIS! --------------------------------------->

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
