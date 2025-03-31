import humidityIcon from "../assets/humidity.jpg";
import windIcon from "../assets/wind.jpg";
function WeatherInfo({ weather }) {
    if (!weather) return null;
  
    return (
      <div>
        <img className="mx-auto w-24 h-24"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
           alt={weather.weather[0].description}/>
        <h1 className="text-2xl font-bold">{weather.name}</h1>
        <h2 className="text-xl">{Math.round(weather.main.temp)}°C</h2>
        <div className="flex justify-between mt-4">
          <div>
          <img src={humidityIcon} alt="Humidity" className="w-8 h-8 mx-auto" />
            <p className="font-bold">{weather.main.humidity}%</p>
            <p className="font-bold">Humidity</p>
          </div>
          <div>
          <img src={windIcon} alt="Wind Speed" className="w-10 h-10 mx-auto" />
            <p className="font-bold">{weather.wind.speed} km/h</p>
            <p className="font-bold">Wind</p>
          </div>
        </div>
      </div>
    );
  }
  export default WeatherInfo