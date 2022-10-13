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
  return (
    <ul>
      {favoriteLocations.map((location) => {
        return (
          <li className="bg-blue-500 rounded-lg flex justify-between p-4">
            <p>
              {location.city}, {location.state}
            </p>
            <p>{location.zipCode}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FavoriteLocationsList;
