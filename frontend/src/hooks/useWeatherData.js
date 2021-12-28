import { useEffect, useState } from "preact/hooks";

const useWeatherData = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();

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
