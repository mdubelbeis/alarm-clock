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
    <div className="h-screen w-full mx-auto">
      <ClockNav />
      <Time />
    </div>
  );
};

export default Clock;
