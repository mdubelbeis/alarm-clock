import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import ActiveAlarms from "../../components/Clock/ActiveAlarms";
import ClockTopWidgetBar from "../../components/Clock/ClockTopWidgetBar";
import FavoriteLocations from "../../components/Clock/FavoriteLocations";
import SetNewAlarm from "../../components/Clock/SetNewAlarm";
import SetNewLocation from "../../components/Clock/SetNewLocation";
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

interface LocationData {
  id: number;
  zipCode: string;
  city: string;
  state: string;
  isFavorite: boolean;
}

const Clock: React.FC = () => {
  // Clock Features / Settings
  const [clockPower, setClockPower] = useState<boolean>(false);

  useEffect(() => {
    setClockPower(true);
  }, []);

  return (
    <div className="flex flex-col items-center gap-16">
      <section className="mt-10 w-full bg-black py-10 opacity-90 text-green-500 drop-shadow-xl rounded">
        <ClockTopWidgetBar />
        <Time />
        <Weekday />
      </section>

      <section
        id="clock-settings"
        className="flex flex-col gap-6 w-full bg-white text-slate-200 p-4 rounded-lg lg:p-8 lg:grid lg:grid-cols-2"
      >
        <SetNewAlarm />
        <SetNewLocation />
        <div className="col-span-2 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white">
          <ActiveAlarms />
          <FavoriteLocations />
        </div>
        {/* ALARM SECTION */}
      </section>
    </div>
  );
};

export default Clock;
