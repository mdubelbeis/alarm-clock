import { useState, useEffect } from "react";

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<{}[]>([]);
  const [location, setLocation] = useState<string>("Austin");

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2c7bf43f9emsh4e853e3c9087f81p1f2733jsnd1452e643658",
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(
        "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5",
        options
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(weatherData);
    } catch (error) {
      // getWeatherData(); //? Keep Trying to fetch if continues to fail?
      console.log("ERROR: " + error);
    }
  };
  return <div>Weather Module</div>;
};

export default Weather;
