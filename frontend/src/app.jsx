import { WeatherCard, Loading } from "./components";
import { useWeatherData } from "./hooks";

// todo: add a plus icon to search cities and add new cards
// will also have to give useWeatherData inputs
export function App(props) {
  const { data: weatherData, loading } = useWeatherData();

  return (
    <div class="bg-purple-200 h-screen">
      {loading ? <Loading /> : <WeatherCard data={weatherData} />}
    </div>
  );
}
