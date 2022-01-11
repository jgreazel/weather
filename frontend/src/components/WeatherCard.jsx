const WeatherCard = (props) => {
  const { name, main, weather } = props.data;

  // todo could easily just change naming convention of icons
  const getWeatherIcon = (icon) => {
    const basePath = "./src/assets/";
    switch (icon) {
      case "Clouds":
        return basePath + "cloudy-day.png";
      case "Clear":
        return basePath + "sunny.png";
    }
  };

  return (
    <div
      class="p-4 w-64 rounded-xl shadow-lg bg-gradient-to-b from-white to-gray-100
      hover:scale-105 hover:shadow-xl transition-all duration-500"
    >
      <div class="flex justify-between m-2">
        <div class="text-xl font-medium text-black">{name}</div>
        <img
          class="h-8 w-8 justify-end"
          src={getWeatherIcon(weather[0].main)}
          alt="clear skies"
        />
      </div>
      <div class="flex justify-between m-2">
        <div class="text-5xl font-medium text-black">
          {Math.floor(main.temp) + "°"}
        </div>
        <div class="grid">
          <p class="text-gray-500 justify-self-end">{weather[0].main}</p>
          <p class="text-gray-500">{`L:${Math.floor(
            main.temp_min
          )}° H:${Math.floor(main.temp_max)}°`}</p>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
