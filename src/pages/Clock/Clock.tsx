import { Link } from "react-router-dom";
import ClockNav from "../../components/Clock/ClockNav";

import Time from "../../components/ui/Time";

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
    <div className="mt-20 flex flex-col justify-around h-full items-center">
      <ClockNav />
      <Time />
    </div>
  );
};

export default Clock;
