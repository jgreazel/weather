import { useEffect, useState } from "preact/hooks";

const useWeatherData = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();

  const baseUrl = "http://localhost:8080/weather";

  useEffect(() => {
    // TODO this doesn't work rn. i want it to fetch weather based on current location
    let city = "/omaha";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        city = `/${position.coords.latitude}/${position.coords.longitude}`;
      });
    } else {
      city = "/omaha";
    }

    fetch(baseUrl + city, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
        setWeather(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { data: weather, loading };
};

export default useWeatherData;
