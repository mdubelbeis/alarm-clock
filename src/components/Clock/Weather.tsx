import { useState, useEffect } from "react";
import TodayDate from "../ui/TodayDate";

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState(null);
  //? HOW TO GET THIS TO WORK WITH GEOLOCATION API()?
  const [location, setLocation] = useState<string>("Austin");

  useEffect(() => {
    // getWeatherData();
  }, []);

  const getWeatherData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${import.meta.env.VITE_REACT_API_KEY}`,
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
    } catch (error) {
      // getWeatherData(); //? Keep Trying to fetch if continues to fail?
      console.log("ERROR: " + error);
    }
  };

  return (
    <div className="text-2xl">
      <div className="flex flex-col text-center">
        <small>CONDITION ICON</small>
        <small>CONDITION TEXT</small>
        <small>
          73<sup>&deg;</sup>
        </small>
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <TodayDate />
      </div>
    </div>
  );
};

export default Weather;
