import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const FavoriteLocationsList: React.FC = () => {
  const handleLocationClick = () => {};
  const favoriteLocations = useSelector(
    (state: RootState) => state.clockStore.weatherModule.favoriteLocations
  );
  return (
    <ul className="flex flex-col gap-4">
      {favoriteLocations.map((location) => {
        return (
          <li
            key={location.id}
            className="bg-blue-500 rounded-lg flex justify-between p-4"
            onClick={handleLocationClick}
          >
            {/* <p className="text-white">
              {location.city}, {location.state}
            </p> */}
            <p className="text-white">{location.zipCode}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FavoriteLocationsList;
