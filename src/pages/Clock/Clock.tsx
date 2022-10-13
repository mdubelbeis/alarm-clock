import { useState, useEffect } from "react";
import ActiveAlarmList from "../../components/Clock/ActiveAlarmList";
import ClockTopWidgetBar from "../../components/Clock/ClockTopWidgetBar";
import FavoriteLocationsList from "../../components/Clock/FavoriteLocationsList";
import RecentAlarmList from "../../components/Clock/RecentAlarmList";

import Time from "../../components/Clock/Time";
import Weekday from "../../components/Clock/Weekday";

//TODO::
/*
  - Features:
    * Alarm (1x alarm)
    * Snooze
    
  - Big Features:
    * Synced Alarm for TODO/NOTES side of app?? (Redux)
    * Set multiple alarms (Redux)
*/

const ACTIVE_ALARMS = [
  { id: Math.random(), name: "Wake up", time: "6:30:00 A" },
  { id: Math.random(), name: "Workout", time: "7:00:00 A" },
  { id: Math.random(), name: "Breakfast", time: "9:30:00 A" },
  { id: Math.random(), name: "Shower", time: "10:30:00 A" },
  { id: Math.random(), name: "testing", time: "1:30:00 P" },
];

const RECENT_ALARMS = [
  { id: Math.random(), name: "Code", time: "12:00:00 P" },
  { id: Math.random(), name: "Eat Lunch", time: "12:00:00 P" },
  { id: Math.random(), name: "Code Again", time: "12:00:00 P" },
];

const LOCATIONS = [
  {
    id: Math.random(),
    zipCode: "23511",
    city: "Norfolk",
    state: "VA",
    isFavorite: false,
  },
  {
    id: Math.random(),
    zipCode: "08753",
    city: "Tom's River",
    state: "NJ",
    isFavorite: false,
  },
  {
    id: Math.random(),
    zipCode: "23511",
    city: "Leander",
    state: "TX",
    isFavorite: true,
  },
];

const Clock: React.FC = () => {
  const [newLocationZip, setNewLocationZip] = useState<string>("");
  const [locations, setLocations] = useState<{}[]>(LOCATIONS);
  const [favoriteLocations, setFavoriteLocations] = useState<{}[]>([]);

  useEffect(() => {
    filterFavoriteLocations();
  }, [locations]);

  const filterFavoriteLocations = () => {
    const filteredLocations = locations.filter(
      (location) => location.isFavorite
    );

    setFavoriteLocations(filteredLocations);
  };

  const handleLocationSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewLocationZip(e.target.zipCode.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLocationZip(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-16">
      <section className="mt-10 w-full bg-black py-10 opacity-90 text-green-500 drop-shadow-xl">
        <ClockTopWidgetBar zipCode={newLocationZip} />
        <Time />
        <Weekday />
      </section>

      <section
        id="clock-settings"
        className="flex flex-col gap-10 w-full bg-white text-slate-200 p-4 rounded-lg lg:p-8 lg:grid lg:grid-cols-2"
      >
        <div className="col-span-1 flex flex-col p-10 bg-blue-500">
          <h3 className="text-center text-4xl tracking-wider py-10 lg:m-10">
            SET NEW ALARM
          </h3>
          <form></form>
        </div>

        <div className="col-span-1 flex flex-col w-full p-4 bg-white border-[1px] border-blue-500 rounded-xl">
          <h3 className="text-center text-blue-500 text-4xl tracking-wider py-10 lg:m-10">
            SET NEW LOCATION
          </h3>
          <form
            className="bg-blue-500 flex flex-col items-center p-20 gap-6 w-full rounded-b-xl shadow-lg"
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

        <div className="col-span-2 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white">
          <div className="flex flex-col p-10 bg-white border-[1px] border-blue-500">
            <h3 className="text-center text-blue-500 text-4xl tracking-wider py-10 lg:py-0 lg:m-10">
              FAVORITE LOCATIONS
            </h3>
            <FavoriteLocationsList favoriteLocations={favoriteLocations} />
          </div>

          <div className="col-span-1 flex flex-col p-10 bg-blue-500">
            <h3 className="text-center text-4xl tracking-wider py-10 lg:m-10">
              ACTIVE ALARMS
            </h3>
            <ActiveAlarmList activeAlarms={ACTIVE_ALARMS} />
          </div>
        </div>
        {/* ALARM SECTION */}
      </section>
    </div>
  );
};

export default Clock;
