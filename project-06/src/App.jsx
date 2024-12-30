// import "./App.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// function App() {
//   const [input, setinput] = useState(0);
//   const API = "https://api.openweathermap.org/data/2.5/weather";
//   // in  this  we have method  "get()" in this paranthisis we enter the url which data you want to fetch
//   // it return promise so we need to return await
//   // const res =  await axios.get(API);
//   // this is not the way of write a code in react
//   // await use karne ke liya as async ka use karna hoga

//   const weatherdata = async () => {
//     try {
//       const res = await axios.get(API);
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     weatherdata();
//   }, []);
//   return (
//     <>
//       <div className="container">
//         <h1>Weather app</h1>
//         <input
//           className="inputfield"
//           type="text"
//           placeholder="Enter place here"
//         />
//       </div>
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState(""); // Store the city input
  const [weather, setWeather] = useState(null); // Store the fetched weather data
  const [error, setError] = useState(""); // Store errors if any
  const [loading, setLoading] = useState(false); // Track loading state

  // The OpenWeatherMap API URL for current weather by city
  const apiKey = "50729dc5dba1ecd8785b6e1f8f19e850";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  // Function to fetch weather data
  const getWeather = async () => {
    if (city.trim() === "") {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: city, // The city you entered
          appid: apiKey, // Your API key
          units: "metric", // Use 'metric' for Celsius, 'imperial' for Fahrenheit
        },
      });

      // Check if response contains data
      if (response.data) {
        setWeather(response.data); // Store the weather data
      }
    } catch (err) {
      // Handle error if city is not found or any API error occurs
      setError("City not found or API error.");
      setWeather(null); // Clear previous weather data
    } finally {
      setLoading(false); // End loading when the request is complete
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>

      <input
        className="inputfield animate__animated animate__bounceInLeft"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update city state on change
        placeholder="Enter city"
      />

      {/* Button to trigger weather data fetch */}
      <button
        className="animate__animated animate__bounceInRight"
        onClick={getWeather}
        disabled={loading}
      >
        Get Weather
      </button>

      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display error if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display weather details */}
      {weather && !loading && (
        <div>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
