import { useAppSelector } from "../../app/hooks";

const ActiveAlarmList: React.FC = () => {
  const activeAlarms = useAppSelector((state) => state.clockStore.activeAlarms);
  return (
    <ul className="grid grid-cols-2 gap-10">
      {activeAlarms.map((alarm) => {
        return (
          <li
            key={alarm.alarmId}
            className="shadow-xl bg-slate-100 text-black text-center rounded-xl"
          >
            <p className="py-2 px-3">{alarm.alarmTime.toUpperCase()}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ActiveAlarmList;
