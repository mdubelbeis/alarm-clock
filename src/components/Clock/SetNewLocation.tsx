import { useState } from "react";
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
    // const { data } = useGetCurrentWeatherByZipCodeQuery(zipCode);
    // console.log(data);
  };

  return (
    //TODO:
    //* Add Location zipCode to API req.
    //* Add new location to LOCATIONS array
    //* Maybe have a recentLocations array when submitted?
    //* Output favoriteLocations array to user

    <div className="col-span-1 flex flex-col w-full p-4 bg-white border-[1px] border-blue-500 rounded-xl">
      <h3 className="text-center text-blue-500 text-4xl tracking-wider py-10 lg:m-10">
        YOUR LOCATION
      </h3>
      <div className="justify-self-end">
        <form
          className="bg-blue-500 flex flex-col justify-between p-20 lg:py-32 gap-6 w-full rounded-b-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2 w-full justify-center">
            <label>
              <input
                className="bg-white py-2 px-4 w-full rounded-xl text-blue-500"
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
            className="py-2 px-4 rounded-xl bg-white text-blue-500"
          >
            GET FORECAST
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetNewLocation;
