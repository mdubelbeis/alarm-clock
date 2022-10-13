import ClockTopWidgetBar from "../../components/Clock/ClockTopWidgetBar";

import Time from "../../components/Clock/Time";
import Weekday from "../../components/Clock/Weekday";

//TODO::
/*
  - Features:
    * Alarm (1x alarm)
    * Snooze
    
  - Big Features:
    * Synced Alarm for TODO/NOTES side of app?? (Redux)
    * Set multiple alarms (Redux)
*/

const Clock: React.FC = () => {
  return (
    <div className="mt-10 bg-black py-10 opacity-90 text-green-500 drop-shadow-xl">
      <ClockTopWidgetBar />
      <Time />
      <Weekday />
    </div>
  );
};

export default Clock;
