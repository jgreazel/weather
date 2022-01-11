import React, { useState } from "react";

import { WeatherCard, Loading, AddButton } from "./components";
import { useWeatherData, useBrowserLocation } from "./hooks";

// todo: add a plus icon to search cities and add new cards
// will also have to give useWeatherData inputs
export function App(props) {
  const [count, setCount] = useState(1);
  const {
    data: { latitude, longitude },
    loading: loadingLocation,
  } = useBrowserLocation();
  const { data: weatherData, loading: loadingWeather } = useWeatherData(
    loadingLocation ? undefined : { latitude, longitude }
  );

  return (
    <div class="bg-blue-100 h-screen p-4">
      <div class="mx-auto max-w-min">
        {loadingWeather ? (
          <Loading />
        ) : (
          <div class="flex flex-col space-y-4">
            <AddButton onClick={() => setCount(count + 1)} />
            {Array.from({ length: count }).map((_, i) => (
              <WeatherCard data={weatherData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
