import { useEffect, useState } from "preact/hooks";

import { WeatherCard } from "./components";

export function App(props) {
  const [weather, setWeather] = useState(null);

  // getting weather data for omaha
  useEffect(() => {
    fetch("http://localhost:8080/weather/omaha", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setWeather(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div class="bg-purple-200 h-screen">
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
