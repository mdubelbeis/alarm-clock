import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { v4 as uuidv4 } from "uuid";

import Icons from "../ui/Icons";
import { setNewLocation } from "../../app/features/Clock/WeatherSlice";
// import { useGetCurrentWeatherByZipCodeQuery } from "../../app/features/apiSlice";

const SetNewLocation: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [zipCode, setZipCode] = useState<string>("");

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      locationId: uuidv4(),
      zipCode: zipCode,
      isFavorite: isFavorite,
    };
    dispatch(setNewLocation(data));
    // API CALL FOR WEATHER DATA
    setZipCode("");
    setIsFavorite(false);
  };

  return (
    //TODO:
    //* Add Location zipCode to API req.
    //* Add new location to LOCATIONS array
    //* Maybe have a recentLocations array when submitted?
    //* Output favoriteLocations array to user

    <div className="col-span-1 h-full flex flex-col justify-between w-full p-4 bg-white border-[1px] rounded-xl shadow-xl">
      <h3 className="text-center text-blue-500 text-4xl tracking-wider py-10">
        SET NEW LOCATION
      </h3>
      <div>{}</div>
      <div className="justify-self-end shadow-xl rounded-lg bg-blue-500">
        <form
          className="flex flex-col justify-between py-20 px-4 lg:py-10 gap-6 w-full mx-auto rounded-b-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4 w-full justify-center">
            <label>
              <input
                className="bg-white py-2 px-4 w-full rounded-xl text-blue-500 shadow-xl"
                type="number"
                id="zipCodeInput"
                onChange={(e) => setZipCode(e.target.value)}
                value={zipCode}
                placeholder="Enter Zip Code"
              />
            </label>
            <div onClick={handleHeartClick}>
              <Icons
                id="heartIcon"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                isFavorite={isFavorite}
              />
            </div>
          </div>

          <button
            type="submit"
            className="py-2 px-4 rounded-xl bg-white text-blue-500 place-self-center w-full max-w-md lg:w-9/12 shadow-xl"
          >
            GET FORECAST
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetNewLocation;
