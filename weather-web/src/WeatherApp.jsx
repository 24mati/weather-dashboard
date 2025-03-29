import { useState } from "react";
import SearchInput from "./componentss/SearchInput";
import WeatherInfo from "./componentss/WeatherInfo";
const API_KEY = "7fa3633cfaf31c11f3a98f70c5e7e6d3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }  
  };

return (
  <div className={`flex flex-col items-center justify-center min-h-screen transition-all duration-500`}>
    <div className="bg-blue-500 
    p-6 rounded-2xl 
    shadow-lg w-50  text-center"> 
      <SearchInput city={city} setCity={setCity} fetchWeather={() => fetchWeather(city)} />
      <WeatherInfo weather={weather} />
    </div>
  </div>
);
}
