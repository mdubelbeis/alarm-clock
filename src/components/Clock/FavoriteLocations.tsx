import FavoriteLocationsList from "./FavoriteLocationsList";

const FavoriteLocations: React.FC = () => {
  return (
    <div className="flex flex-col p-10 bg-white border-[1px] shadow-xl rounded-xl">
      <h3 className="text-center text-blue-500 text-4xl tracking-wider py-10 lg:py-0 lg:m-10">
        FAVORITE LOCATIONS
      </h3>
      <FavoriteLocationsList />
    </div>
  );
};

export default FavoriteLocations;
