import FavoriteLocationsList from "./FavoriteLocationsList";

const FavoriteLocations: React.FC = () => {
  return (
    <div className="flex flex-col p-10 bg-white gap-10 border-[1px] shadow-xl rounded-xl">
      <h3 className="text-center text-blue-500 text-4xl tracking-wider lg:m-10">
        FAVORITE LOCATIONS
      </h3>
      <FavoriteLocationsList />
    </div>
  );
};

export default FavoriteLocations;
