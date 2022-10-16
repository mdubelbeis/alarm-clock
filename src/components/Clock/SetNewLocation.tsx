interface SetNewLocationProps {
  handleLocationSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newLocationZip: string;
}

const SetNewLocation: React.FC<SetNewLocationProps> = ({
  handleLocationSubmit,
  handleLocationChange,
  newLocationZip,
}) => {
  return (
    <div className="col-span-1 flex flex-col w-full p-4 bg-white border-[1px] border-blue-500 rounded-xl">
      <h3 className="text-center text-blue-500 text-4xl tracking-wider py-10 lg:m-10">
        SET NEW LOCATION
      </h3>
      <div className="justify-self-end">
        <form
          className="bg-blue-500 flex flex-col justify-between p-20 lg:py-32 gap-6 w-full rounded-b-xl shadow-lg"
          onSubmit={handleLocationSubmit}
        >
          <label>
            <input
              className="bg-white py-2 px-4 w-full rounded-xl text-blue-500"
              type="number"
              onChange={handleLocationChange}
              value={newLocationZip}
              placeholder="Enter Zip Code"
              id="zipCode"
            />
          </label>
          <button className="py-2 px-4 rounded-xl bg-white text-blue-500">
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetNewLocation;
