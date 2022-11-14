import { useAppSelector } from "../../app/hooks";

const FavoriteLocationsList: React.FC = () => {
  const handleLocationClick = () => {};
  const favoriteLocations = useAppSelector(
    (state) => state.weatherStore.favoriteLocations
  );

  return (
    <ul className="grid grid-cols-4 gap-4">
      {favoriteLocations.map((location) => {
        return (
          <li
            key={location.locationId}
            className="bg-blue-500 shadow-xl rounded-lg py-2 px-4 w-fit hover:bg-blue-700 hover:cursor-pointer"
            onClick={handleLocationClick}
          >
            <p className="text-white tracking-wider">{location.zipCode}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FavoriteLocationsList;
