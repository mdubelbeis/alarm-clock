import { useDispatch, useSelector } from "react-redux";
import { clockActions } from "../../app/Clock/ClockSlice";
import { RootState } from "../../app/store";

const AlarmSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const alarmState = useSelector(
    (state: RootState) => state.clockStore.alarmModule.alarmPower
  );
  let alarmOnStyle = alarmState ? "bg-green-500 text-black" : "";
  let alarmOffStyle = !alarmState ? "bg-black text-green-500" : "";

  const handleAlarmPower = () => {
    dispatch(clockActions.setAlarmPower(!alarmState));
  };

  return (
    <button
      onClick={handleAlarmPower}
      className={`${alarmOffStyle} ${alarmOnStyle} rounded-lg opacity-60 mx-auto lg:absolute top-4 left-[32rem] py-1 px-2 border-[1px] border-green-500 hover:bg-green-500 hover:text-black`}
    >
      <span>ALARM</span>
    </button>
  );
};

export default AlarmSwitch;
