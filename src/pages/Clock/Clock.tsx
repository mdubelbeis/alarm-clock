import React, { useState, useEffect } from "react";
import ActiveAlarmList from "../../components/Clock/ActiveAlarmList";
import ClockTopWidgetBar from "../../components/Clock/ClockTopWidgetBar";
import FavoriteLocationsList from "../../components/Clock/FavoriteLocationsList";

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
      time: `${hour}:${minutes}:00 ${amOrPm}`,
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

  const filterFavoriteLocations = (): void => {
    const filteredLocations = LOCATIONS.filter(
      (location): boolean => location.isFavorite
    );
    // console.log(filteredLocations);
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

  const getMinutesOptions = () => {
    let minutesArr: string[] = [];
    for (let i = 0; i <= 59; i++) {
      if (i >= 0) {
        minutesArr.push(String(i));
      }
    }

    setMinutes(minutesArr);
  };

  const handleOutput = (min: string) => {
    switch (min) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        return (
          <option key={min} value={min}>
            {"0" + min}
          </option>
        );
      }
      default: {
        return (
          <option key={min} value={min}>
            {min}
          </option>
        );
      }
    }
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
        <div className="col-span-1 flex flex-col px-4 py-5 bg-blue-500 rounded-xl text-black">
          <div>
            <h3 className="text-center text-4xl text-white tracking-wider py-8 lg:mt-6">
              SET NEW ALARM
            </h3>
            <form
              className="w-full flex flex-col justify-center items-center gap-6 mt-10"
              onSubmit={addNewAlarm}
            >
              <div className="flex flex-col items-center gap-2 w-full">
                <label>
                  <input
                    type="text"
                    id="alarmName"
                    name="alarmName"
                    className="py-2 px-4 rounded-lg"
                    onChange={handleAlarmName}
                    placeholder="Name your alarm"
                    maxLength={20}
                    disabled={!alarmPower}
                  />
                </label>
              </div>

              <div className="text-white tracking-wide">
                <h2 className="text-4xl text-center p-4">
                  What time do you want to set an alarm for?
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <label
                    htmlFor="hourCount"
                    className="text-white tracking-wider"
                  >
                    HOUR
                  </label>
                  <select
                    name="hourCount"
                    id="hourCount"
                    className="w-fit rounded-md p-3"
                    onChange={handleHourChange}
                    disabled={!alarmPower}
                  >
                    {hourCount.map((hour) => {
                      return (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <label
                    htmlFor="minutesCount"
                    className="text-white tracking-wider"
                  >
                    MINUTES
                  </label>
                  <select
                    name="minutesCount"
                    id="minutesCount"
                    className="w-fit rounded-md p-3"
                    onChange={handleMinutesChange}
                    disabled={!alarmPower}
                  >
                    {minutes.map((min) => handleOutput(min))}
                  </select>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <label htmlFor="amOrPm" className="text-white tracking-wider">
                    AM/PM
                  </label>
                  <select
                    className="rounded-md p-3"
                    name="amOrPm"
                    id="amOrPm"
                    onChange={handleAmOrPmChange}
                    disabled={!alarmPower}
                  >
                    <option value="A">AM</option>
                    <option value="P">PM</option>
                  </select>
                </div>
              </div>
              <div>
                <button
                  className={`py-2 px-4 rounded-lg bg-white text-blue-500 ${
                    alarmPower ? "" : "bg-slate-300 opacity-40"
                  }`}
                  disabled={!alarmPower}
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
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
        s
        <div className="col-span-2 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white">
          <div className="col-span-1 flex flex-col p-10 bg-blue-500 rounded-xl">
            <h3 className="text-center text-4xl text-white tracking-wider py-10 lg:m-10">
              ACTIVE ALARMS
            </h3>
            <ActiveAlarmList activeAlarms={alarms} />
          </div>
          <div className="flex flex-col p-10 bg-white border-[1px] border-blue-500 rounded-xl">
            <h3 className="text-center text-blue-500 text-4xl tracking-wider py-10 lg:py-0 lg:m-10">
              FAVORITE LOCATIONS
            </h3>
            <FavoriteLocationsList favoriteLocations={favoriteLocations} />
          </div>
        </div>
        {/* ALARM SECTION */}
      </section>
    </div>
  );
};

export default Clock;
