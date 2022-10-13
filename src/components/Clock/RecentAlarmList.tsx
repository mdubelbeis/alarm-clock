interface RecentAlarmListProps {
  recentAlarms: { id: number; name: string; time: string }[];
}
const RecentAlarmList: React.FC<RecentAlarmListProps> = ({ recentAlarms }) => {
  return (
    <ul className="grid grid-cols-2 gap-10">
      {recentAlarms.map((alarm) => {
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

export default RecentAlarmList;
