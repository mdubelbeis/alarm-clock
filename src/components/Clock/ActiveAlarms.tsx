import ActiveAlarmList from "./ActiveAlarmList";

interface ActiveAlarmsProps {
  activeAlarms: { id: number; name: string; time: string }[];
  recentAlarms: { id: number; name: string; time: string }[];
}

const ActiveAlarms: React.FC<ActiveAlarmsProps> = ({
  activeAlarms,
  recentAlarms,
}) => {
  return (
    <div className="col-span-1 flex flex-col p-10 bg-blue-500 rounded-xl">
      <h3 className="text-center text-4xl text-white tracking-wider py-10 lg:m-10">
        ACTIVE ALARMS
      </h3>
      <ActiveAlarmList activeAlarms={activeAlarms} />
    </div>
  );
};

export default ActiveAlarms;
