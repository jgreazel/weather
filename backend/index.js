import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

// https://rapidapi.com/community/api/open-weather-map/
app.get("/weather/omaha", (req, res) => {
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      q: "Omaha,US",
      //   lat: "41.2586",
      //   lon: "-95.9378",
      //   callback: "weather",
      //   id: "2172797",
      //   lang: "null",
      units: "imperial",
    },
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "5ab70bc57amsh1e74c2ee9b9b191p103d93jsn9c10a42d558a",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/weather/:lat/:lon", (req, res) => {
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      //   q: "Omaha,US",
      lat: req.params.lat,
      lon: req.params.lon,
      callback: "weather",
      id: "2172797",
      lang: "null",
      units: "imperial",
      mode: "xml",
    },
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "5ab70bc57amsh1e74c2ee9b9b191p103d93jsn9c10a42d558a",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => console.log(`Weather app listening on port ${port}!`));
