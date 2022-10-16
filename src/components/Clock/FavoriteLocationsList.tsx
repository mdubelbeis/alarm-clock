interface FavoriteLocationsListProps {
  favoriteLocations: {
    id: number;
    city: string;
    state: string;
    zipCode: string;
    isFavorite: boolean;
  }[];
}

const FavoriteLocationsList: React.FC<FavoriteLocationsListProps> = ({
  favoriteLocations,
}) => {
  const handleLocationClick = () => {};

  return (
    <ul className="flex flex-col gap-4">
      {favoriteLocations.map((location) => {
        return (
          <li
            key={location.id}
            className="bg-blue-500 rounded-lg flex justify-between p-4"
            onClick={handleLocationClick}
          >
            <p className="text-white">
              {location.city}, {location.state}
            </p>
            <p className="text-white">{location.zipCode}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FavoriteLocationsList;
