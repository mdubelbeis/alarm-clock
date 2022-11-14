interface RecentAlarmListProps {
  recentAlarms: { alarmId: string; alarmTime: string; alarmName: string }[];
}
const RecentAlarmList: React.FC<RecentAlarmListProps> = ({ recentAlarms }) => {
  return (
    <ul className="grid grid-cols-2 gap-10">
      {recentAlarms.map((alarm) => {
        return (
          <li
            key={alarm.alarmId}
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

export default RecentAlarmList;
