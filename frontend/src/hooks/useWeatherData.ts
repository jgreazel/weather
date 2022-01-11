import { useEffect, useState } from "preact/hooks";

const useWeatherData = (coordinates?: {
  latitude: number;
  longitude: number;
}) => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState();

  const baseUrl = "http://localhost:8080/weather";

  const location = coordinates
    ? `${coordinates.latitude}/${coordinates.longitude}`
    : "omaha";

  useEffect(() => {
    fetch(baseUrl + "/" + location, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
        // todo remove after testing
        console.log(json);
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
