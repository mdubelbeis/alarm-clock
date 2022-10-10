import { useState, useEffect } from "react";
import DaysList from "../Clock/DaysList";
import TodayDate from "./TodayDate";

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
      <DaysList day={day} />
      <div className="lg:hidden">{day.toUpperCase()}</div>
    </div>
  );
};

export default Weekday;
