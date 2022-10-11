import ClockNav from "../../components/Clock/ClockNav";
import ClockTopWidgetBar from "../../components/Clock/ClockTopWidgetBar";
import Weather from "../../components/Clock/Weather";

import Time from "../../components/ui/Time";
import Weekday from "../../components/ui/Weekday";

//TODO::
/*
  - Features:
    * Alarm (1x alarm)
    * Snooze
    
  - Big Features:
    * Synced Alarm for TODO/NOTES side of app?? (Redux? Context?)
    * Set multiple alarms
*/

const Clock: React.FC = () => {
  return (
    <div className="bg-black opacity-90 text-green-500 drop-shadow-xl py-10">
      <ClockTopWidgetBar />
      <Time />
      <Weekday />
    </div>
  );
};

export default Clock;
