import { useState, useEffect } from "react";
import TodayDate from "./TodayDate";

const DAYS = [
  { day: "mon", id: 1 },
  { day: "tues", id: 2 },
  { day: "wed", id: 3 },
  { day: "thurs", id: 4 },
  { day: "fri", id: 5 },
  { day: "sat", id: 6 },
  { day: "sun", id: 0 },
];

const Weekday: React.FC = () => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());
  const [day, setDay] = useState("");

  useEffect(() => {
    convertDayOfWeek();
  }, []);

  const convertDayOfWeek = () => {
    switch (dayOfWeek) {
      case 0:
        setDay("sun");
      case 1:
        setDay("mon");
        break;
      case 2:
        setDay("tues");
        break;
      case 3:
        setDay("wed");
        break;
      case 4:
        setDay("thurs");
        break;
      case 5:
        setDay("fri");
        break;
      case 6:
        setDay("sat");
        break;
      default:
        setDay("error");
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <TodayDate />
      <ul className="hidden lg:flex lg:gap-10">
        {DAYS.map((weekday) => {
          return (
            <li
              key={weekday.id}
              className={`${
                weekday.day === day ? "text-green-100" : "text-green-500"
              } tracking-wider`}
            >
              {weekday.day}
            </li>
          );
        })}
      </ul>
      <div className="lg:hidden">{day.toUpperCase()}</div>
    </div>
  );
};

export default Weekday;
