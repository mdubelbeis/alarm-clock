import { useState } from "react";

interface AlarmSwitchProps {
  alarmPower: (mode: boolean) => void;
}

const AlarmSwitch: React.FC<AlarmSwitchProps> = ({ alarmPower }) => {
  const [alarmOn, setAlarmOn] = useState(false);
  let alarmOnStyle = alarmOn ? "bg-green-500 text-black" : "";
  let alarmOffStyle = !alarmOn ? "bg-black text-green-500" : "";

  const handleAlarmPower = () => {
    setAlarmOn(!alarmOn);
    alarmPower(!alarmOn);
  };

  return (
    <button
      onClick={handleAlarmPower}
      className={`${alarmOffStyle} ${alarmOnStyle} opacity-60 mx-auto lg:absolute top-4 left-[32rem] py-1 px-2 border-[1px] border-green-500 hover:bg-green-500 hover:text-black`}
    >
      <span>ALARM</span>
    </button>
  );
};

export default AlarmSwitch;
