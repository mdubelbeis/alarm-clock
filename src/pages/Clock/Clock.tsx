import React, { useState, useEffect } from "react";
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
    zipCode: "78641",
    city: "Leander",
    state: "TX",
    isFavorite: true,
  },
  {
    id: Math.random(),
    zipCode: "08753",
    city: "Forked Rived",
    state: "NJ",
    isFavorite: true,
  },
  {
    id: Math.random(),
    zipCode: "23511",
    city: "Norfolk",
    state: "VA",
    isFavorite: true,
  },
];

interface LocationData {
  id: number;
  zipCode: string;
  city: string;
  state: string;
  isFavorite: boolean;
}

const hourCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Clock: React.FC = () => {
  const [newLocationZip, setNewLocationZip] = useState<string>("78641");
  const [locations, setLocations] = useState<{}[]>(LOCATIONS);
  const [favoriteLocations, setFavoriteLocations] = useState<LocationData[]>(
    []
  );

  // ALARM
  const [alarmPower, setAlarmPower] = useState<boolean>(false);

  const [minutes, setMinutes] = useState<string[]>([]);

  const [alarms, setAlarms] = useState<
    {
      id: number;
      name: string;
      time: string;
    }[]
  >(ACTIVE_ALARMS);
  const [alarmHour, setAlarmHour] = useState<string>("");
  const [alarmMinutes, setAlarmMinutes] = useState<string>("");
  const [amOrPm, setAmOrPm] = useState<string>("");
  const [alarmName, setAlarmName] = useState<string>("");

  useEffect(() => {
    filterFavoriteLocations();
    getMinutesOptions();
  }, [locations, alarmPower]);

  const handleAlarmNotice = () => {};

  const filterFavoriteLocations = (): void => {
    const filteredLocations = LOCATIONS.filter(
      (location): boolean => location.isFavorite
    );
    setFavoriteLocations(filteredLocations);
  };

  const handleLocationSubmit = (
    e: React.ChangeEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    setNewLocationZip(e.target.zipCode.value);
  };

  const handleLocationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewLocationZip(e.target.value);
  };

  const handleAmOrPmChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setAmOrPm(e.target.value);
  };

  const addNewAlarm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hour = e.currentTarget.hourCount.value;
    let minutes = e.currentTarget.minutesCount.value;
    let seconds = "00";
    let amOrPm = e.currentTarget.amOrPm.value;

    if (minutes < 10) {
      minutes = "0" + e.currentTarget.minutesCount.value;
    } else {
      minutes = e.currentTarget.minutesCount.value;
    }

    const alarm = {
      id: Math.random(),
      name: `${alarmName}`,
      time: `${hour}:${minutes}:${seconds} ${amOrPm}`,
    };

    setAlarms((prevAlarm) => [alarm, ...prevAlarm]);
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setAlarmHour(e.target.value);
  };

  const handleMinutesChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setAlarmMinutes(e.target.value);
  };

  const handleAlarmName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAlarmName(e.target.value);
  };

  const getMinutesOptions = () => {
    let minutesArr: string[] = [];
    for (let i = 0; i <= 59; i++) {
      if (i >= 0) {
        minutesArr.push(String(i));
      }
    }

    setMinutes(minutesArr);
  };

  return (
    <div className="flex flex-col items-center gap-16">
      <section className="mt-10 w-full bg-black py-10 opacity-90 text-green-500 drop-shadow-xl">
        <ClockTopWidgetBar zip={newLocationZip} alarmPower={setAlarmPower} />
        <Time />
        <Weekday />
      </section>

      <section
        id="clock-settings"
        className="flex flex-col gap-6 w-full bg-white text-slate-200 p-4 rounded-lg lg:p-8 lg:grid lg:grid-cols-2"
      >
        <SetNewAlarm
          addNewAlarm={addNewAlarm}
          handleAlarmName={handleAlarmName}
          alarmPower={alarmPower}
          handleHourChange={handleHourChange}
          handleMinutesChange={handleMinutesChange}
          handleAmOrPmChange={handleAmOrPmChange}
          hourCount={hourCount}
          minutes={minutes}
        />
        <SetNewLocation
          handleLocationSubmit={handleLocationSubmit}
          handleLocationChange={handleLocationChange}
          newLocationZip={newLocationZip}
        />
        <div className="col-span-2 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white">
          <ActiveAlarms activeAlarms={alarms} />
          <FavoriteLocations favoriteLocations={favoriteLocations} />
        </div>
        {/* ALARM SECTION */}
      </section>
    </div>
  );
};

export default Clock;
