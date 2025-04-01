import { useState } from "react";
import SearchInput from "./componentss/SearchInput";
import WeatherInfo from "./componentss/WeatherInfo";
const API_KEY = "7fa3633cfaf31c11f3a98f70c5e7e6d3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const fetchWeather = async () => {
    if (!city)
      {
        alert("please enter a correct country name");
        return;
      } 
    try {
      const response = await fetch(`${API_URL}${city}&appid=${API_KEY}`);
      const data = await response.json();
      if (data.cod === "404"){
        alert("please enter a correct country name");
        return;
      }
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }  
  };

  const Backgroundcolor = () => {
    if (!weather) return "bg-[linear-gradient(to_right,rgb(219,234,254),rgb(147,197,253),rgb(59,130,246))]"; // Default background
    const condition = weather.weather[0].main.toLowerCase();
  
    if (condition.includes("rain")) return "bg-gray-400";  // Rainy day
    if (condition.includes("cloud")) return "bg-[linear-gradient(to_left_bottom,rgb(49,46,129),rgb(129,140,248),rgb(49,46,129))]"; // Cloudy day
    if (condition.includes("clear")) return "bg-[radial-gradient(at_center_top,rgb(180,83,9),rgb(253,186,116),rgb(159,18,57))]"; // Sunny day
    if (condition.includes("snow")) return "bg-blue-100";     // Snowy  day
    return "bg-blue-500"; // Default fallback
  };
return (
  <div className={`flex flex-col items-center justify-center min-h-screen w-full hcreen -stransition-all duration-500 ${Backgroundcolor()}`}>
     <div className="bg-blue-300 p-6 rounded-2xl shadow-lg w-full max-w-lg h-full text-center">

      <SearchInput city={city} setCity={setCity} fetchWeather={() => fetchWeather(city)} />
      <WeatherInfo weather={weather} />
    </div>
  </div>
);
}

