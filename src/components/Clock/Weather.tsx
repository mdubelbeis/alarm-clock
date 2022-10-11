import { useState, useEffect } from "react";
import TodayDate from "../ui/TodayDate";

const WEATHER_ICONS = [
  //* MIST/FOG
  {
    dayUrl: "/assets/icons/a01d.png",
    nightUrl: "/assets/icons/a01n.png",
    name: "mist",
    code: 700,
  },
  {
    dayUrl: "/assets/icons/a02d.png",
    nightUrl: "/assets/icons/a02n.png",
    name: "smoke",
    code: 711,
  },
  {
    dayUrl: "/assets/icons/a03d.png",
    nightUrl: "/assets/icons/a03n.png",
    name: "haze",
    code: 721,
  },
  {
    dayUrl: "/assets/icons/a04d.png",
    nightUrl: "/assets/icons/a04n.png",
    name: "sand/dust",
    code: 731,
  },
  {
    dayUrl: "/assets/icons/a05d.png",
    nightUrl: "/assets/icons/a05n.png",
    name: "fog",
    code: 741,
  },
  {
    dayUrl: "/assets/icons/a06d.png",
    nightUrl: "/assets/icons/a06n.png",
    name: "freezing fog",
    code: 751,
  },
  //* CLEAR
  {
    dayUrl: "/assets/icons/c01d.png",
    nightUrl: "/assets/icons/c01n.png",
    name: "clear skies",
    code: 800,
  },
  {
    dayUrl: "/assets/icons/c02d.png",
    nightUrl: "/assets/icons/c02n.png",
    name: "few clouds",
    code: 801,
  },
  {
    dayUrl: "/assets/icons/c03d.png",
    nightUrl: "/assets/icons/c03n.png",
    name: "broken clouds",
    code: 803,
  },
  {
    dayUrl: "/assets/icons/c04d.png",
    nightUrl: "/assets/icons/c04n.png",
    name: "overcast",
    code: 804,
  },
  {
    dayUrl: "/assets/icons/u00d.png",
    nightUrl: "/assets/icons/u00n.png",
    name: "unknown precipitation",
    code: 900,
  },
  //* SNOW/SLEET
  {
    dayUrl: "/assets/icons/s01d.png",
    nightUrl: "/assets/icons/s01n.png",
    name: "light snow",
    code: 600,
  },
  {
    dayUrl: "/assets/icons/s02d.png",
    nightUrl: "/assets/icons/s02n.png",
    name: "snow",
    code: 601,
  },
  {
    dayUrl: "/assets/icons/s03d.png",
    nightUrl: "/assets/icons/s03n.png",
    name: "heavy snow",
    code: 602,
  },
  {
    dayUrl: "/assets/icons/s04d.png",
    nightUrl: "/assets/icons/s04n.png",
    name: "mix snow/rain",
    code: 610,
  },
  {
    dayUrl: "/assets/icons/s05d.png",
    nightUrl: "/assets/icons/s05n.png",
    name: "sleet",
    code: 611,
  },
  {
    dayUrl: "/assets/icons/s05d.png",
    nightUrl: "/assets/icons/s05n.png",
    name: "heavy sleet",
    code: 612,
  },
  {
    dayUrl: "/assets/icons/s01d.png",
    nightUrl: "/assets/icons/s01n.png",
    name: "snow shower",
    code: 621,
  },
  {
    dayUrl: "/assets/icons/s02d.png",
    nightUrl: "/assets/icons/s02n.png",
    name: "heavy snow shower",
    code: 622,
  },
  {
    dayUrl: "/assets/icons/s06d.png",
    nightUrl: "/assets/icons/s06n.png",
    name: "flurries",
    code: 623,
  },
  //* RAIN
  {
    dayUrl: "/assets/icons/r01d.png",
    nightUrl: "/assets/icons/r01n.png",
    name: "light rain",
    code: 500,
  },
  {
    dayUrl: "/assets/icons/r02d.png",
    nightUrl: "/assets/icons/r02n.png",
    name: "moderate rain",
    code: 501,
  },
  {
    dayUrl: "/assets/icons/r03d.png",
    nightUrl: "/assets/icons/r03n.png",
    name: "heavy rain",
    code: 502,
  },
  {
    dayUrl: "/assets/icons/r04d.png",
    nightUrl: "/assets/icons/r04n.png",
    name: "light shower rain",
    code: 520,
  },
  {
    dayUrl: "/assets/icons/r05d.png",
    nightUrl: "/assets/icons/r05n.png",
    name: "shower rain",
    code: 521,
  },
  {
    dayUrl: "/assets/icons/r06d.png",
    nightUrl: "/assets/icons/r06n.png",
    name: "heavy shower rain",
    code: 522,
  },
  {
    dayUrl: "/assets/icons/f01d.png",
    nightUrl: "/assets/icons/f01n.png",
    name: "freezing rain",
    code: 511,
  },

  //* DRIZZLE
  {
    dayUrl: "/assets/icons/d01d.png",
    nightUrl: "/assets/icons/d01n.png",
    name: "light drizzle",
    code: 300,
  },
  {
    dayUrl: "/assets/icons/d02d.png",
    nightUrl: "/assets/icons/d02n.png",
    name: "drizzle",
    code: 301,
  },
  {
    dayUrl: "/assets/icons/d03d.png",
    nightUrl: "/assets/icons/d03n.png",
    name: "heavy drizzle",
    code: 302,
  },

  //* THUNDERSTORMS
  {
    dayUrl: "/assets/icons/t01d.png",
    nightUrl: "/assets/icons/t01n.png",
    name: "thunderstorm with light rain",
    code: 200,
  },
  {
    dayUrl: "/assets/icons/t02d.png",
    nightUrl: "/assets/icons/t02n.png",
    name: "thunderstorm with rain",
    code: 201,
  },
  {
    dayUrl: "/assets/icons/t03d.png",
    nightUrl: "/assets/icons/t03n.png",
    name: "thunderstorm with heavy rain",
    code: 202,
  },
  {
    dayUrl: "/assets/icons/t04d.png",
    nightUrl: "/assets/icons/t04n.png",
    name: "thunderstorm with light drizzle",
    code: 230,
  },
  {
    dayUrl: "/assets/icons/t04d.png",
    nightUrl: "/assets/icons/t04n.png",
    name: "thunderstorms with drizzle",
    code: 231,
  },
  {
    dayUrl: "/assets/icons/t04d.png",
    nightUrl: "/assets/icons/t04n.png",
    name: "thunderstorms with heavy drizzle",
    code: 232,
  },
  {
    dayUrl: "/assets/icons/t05d.png",
    nightUrl: "/assets/icons/t05n.png",
    name: "thunderstorm with hail",
    code: 233,
  },
];

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<{
    temp: string;
    ["city_name"]: string;
    ["weather.description"]: string;
    ["state_code"]: string;
  }>();
  //? HOW TO GET THIS TO WORK WITH GEOLOCATION API()?
  const [zipCode, setZipCode] = useState<string>("78641");
  const [geoLocation, setGeoLocation] = useState<string>("");

  useEffect(() => {
    // getWeatherData();
  }, []);

  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/current?&postal_code=${zipCode}&country=US&key=${
          import.meta.env.VITE_REACT_API_KEY
        }`
      );
      const data = await response.json();
      setWeatherData(data.data[0]);
      // console.log(weatherData);
    } catch (error) {
      // getWeatherData(); //? Keep Trying to fetch if continues to fail?
      console.log("ERROR: " + error);
    }
  };

  return (
    <div className="text-2xl lg:absolute lg:top-2 lg:left-4">
      <div className="flex flex-col text-center gap-4">
        <div className="flex flex-col">
          <small>CONDITION ICON</small>
          <small className="text-sm">{weatherData!.weather.description}</small>
        </div>
        <div className="flex flex-col">
          <small>
            {weatherData!.city_name}, {weatherData!.weather.state_code}
          </small>
          <small>
            {weatherData!.temp}
            <sup>&deg;</sup>
          </small>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <TodayDate />
      </div>
    </div>
  );
};

export default Weather;
