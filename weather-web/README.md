Weather App
Simple weather application built using React that allows the user to find a city's weather conditions via the OpenWeatherMap API.
...........Features
Search weather by city name
Displays temperature, humidity, and wind speed
Displays weather icons based on conditions
Dynamic background color changes based on weather conditions
Error handling for invalid city names
..........Usage
Enter a city name in the input field.
Click the search button (🔍) to fetch weather data.
The application will display temperature, humidity, and wind speed.
Background color changes dynamically based on the weather
...............Technologies Used
React.js
Tailwind CSS
OpenWeatherMap API
................. the structer of weather-dashbord 
OpenWeatherMap API
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchInput.jsx
│   │   └── WeatherInfo.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── package.json
................API Key Configuration
condition.This project uses OpenWeatherMap API.
If you plan to deploy or modify it, make sure to replace the API key in WeatherApp.jsx:
const API_KEY = "7fa3633cfaf31c11f3a98f70c5e7e6d3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
