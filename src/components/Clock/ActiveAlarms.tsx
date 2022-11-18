import ActiveAlarmList from "./ActiveAlarmList";

const ActiveAlarms: React.FC = () => {
  return (
    <div className="col-span-1 flex flex-col p-10 gap-10 bg-blue-500 rounded-xl shadow-xl">
      <h3 className="text-center text-4xl text-white tracking-wider lg:m-10">
        ACTIVE ALARMS
      </h3>
      <ActiveAlarmList />
    </div>
  );
};

export default ActiveAlarms;
