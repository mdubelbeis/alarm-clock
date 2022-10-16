interface ActiveAlarmListProps {
  activeAlarms: { id: number; name: string; time: string }[];
}

const ActiveAlarmList: React.FC<ActiveAlarmListProps> = ({ activeAlarms }) => {
  return (
    <ul className="grid grid-cols-2 gap-10">
      {activeAlarms.map((alarm) => {
        return (
          <li
            key={alarm.id}
            className="shadow-xl bg-slate-100 text-black text-center p-4 rounded-xl"
          >
            <p>{alarm.name.toUpperCase()}</p>
            <p>{alarm.time.toUpperCase()}</p>
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
