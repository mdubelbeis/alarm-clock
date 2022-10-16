import FavoriteLocationsList from "./FavoriteLocationsList";

interface FavoriteLocationsProps {
  favoriteLocations: {
    id: number;
    zipCode: string;
    city: string;
    state: string;
    isFavorite: boolean;
  }[];
}

const FavoriteLocations: React.FC<FavoriteLocationsProps> = ({
  favoriteLocations,
}) => {
  return (
    <div className="flex flex-col p-10 bg-white border-[1px] border-blue-500 rounded-xl">
      <h3 className="text-center text-blue-500 text-4xl tracking-wider py-10 lg:py-0 lg:m-10">
        FAVORITE LOCATIONS
      </h3>
      <FavoriteLocationsList favoriteLocations={favoriteLocations} />
    </div>
  );
};

export default FavoriteLocations;
