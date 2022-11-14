import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setNewAlarm } from "../../app/features/Clock/ClockSlice";
import { v4 as uuidv4 } from "uuid";

const hourCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface NewAlarmState {
  alarmId: string;
  alarmTime: string;
  alarmName: string;
}

const SetNewAlarm: React.FC = () => {
  const dispatch = useAppDispatch();
  let alarmName: string = "";
  const minutes: string[] = [];
  const alarmPower = useAppSelector((state) => state.clockStore.alarmPower);

  const handleNewAlarmSubmit = (
    e: React.ChangeEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();

    let hour = e.currentTarget.hourCount.value;
    let minutes = e.currentTarget.minutesCount.value;
    let seconds = "00";
    let amOrPm = e.currentTarget.amOrPm.value;

    useEffect(() => {
      getMinutesOptions();
    }, []);

    const getMinutesOptions = () => {
      for (let i = 0; i <= 59; i++) {
        if (i >= 0) {
          minutes.push(String(i));
        }
      }
    };

    if (minutes < 10) {
      minutes = "0" + e.currentTarget.minutesCount.value;
    } else {
      minutes = e.currentTarget.minutesCount.value;
    }

    const newAlarm: NewAlarmState = {
      alarmId: uuidv4(),
      alarmTime: `${hour}:${minutes}:${seconds} ${amOrPm}`,
      alarmName: `${alarmName}`,
    };

    dispatch(setNewAlarm(newAlarm));
    alarmName = "";
  };

  const handleAlarmName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    alarmName = e.target.value;
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
    <div className="col-span-1 flex flex-col px-4 py-20 bg-blue-500 rounded-xl text-black">
      <div>
        <h3 className="text-center text-4xl text-white tracking-wider lg:mt-6">
          SET NEW ALARM
        </h3>
        <form
          className="w-full flex flex-col justify-center items-center gap-6 mt-10"
          onSubmit={handleNewAlarmSubmit}
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
                value={alarmName}
                maxLength={20}
                disabled={!alarmPower}
              />
            </label>
          </div>

          <div className="text-white tracking-wide">
            {alarmPower && (
              <h2 className="text-4xl text-center p-4">
                What time do you want to set an alarm for?
              </h2>
            )}
            {!alarmPower && (
              <h2 className="text-4xl text-center text-red-400 p-4">
                Turn on Alarm to set new alarm
              </h2>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <label htmlFor="hourCount" className="text-white tracking-wider">
                HOUR
              </label>
              <select
                name="hourCount"
                id="hourCount"
                className="w-fit rounded-md p-3"
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
  );
};

export default SetNewAlarm;
