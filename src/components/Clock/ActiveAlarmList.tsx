import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ActiveAlarmList: React.FC = () => {
  const activeAlarms = useSelector(
    (state: RootState) => state.clockStore.alarmModule.activeAlarms
  );
  return (
    <ul className="grid grid-cols-2 gap-10">
      {activeAlarms.map((alarm) => {
        return (
          <li
            key={alarm.id}
            className="shadow-xl bg-slate-100 text-black text-center p-4 rounded-xl"
          >
            <p>{alarm.alarmName.toUpperCase()}</p>
            <p>{alarm.alarmTime.toUpperCase()}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ActiveAlarmList;

//TODO:
//* When <li> is clicked, how to delete/edit/rename alarm?
//*
