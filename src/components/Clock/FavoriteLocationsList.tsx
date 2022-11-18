import { useAppSelector } from "../../app/hooks";

const FavoriteLocationsList: React.FC = () => {
  const handleLocationClick = () => {};
  const favoriteLocations = useAppSelector(
    (state) => state.weatherStore.favoriteLocations
  );

  return (
    <ul className="grid grid-cols-2 w-6/12 gap-10">
      {favoriteLocations.map((location) => {
        return (
          <li
            key={location.locationId}
            className="bg-blue-500 shadow-xl rounded-lg w-fit py-2 px-4 hover:bg-blue-700 hover:cursor-pointer"
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
