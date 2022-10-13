import React from "react";
import Alarm from "./Alarm";
import ClockNav from "./ClockNav";
import Weather from "./Weather";

interface ClockTopWidgetBar {
  zipCode: string;
}

const ClockTopWidgetBar: React.FC<ClockTopWidgetBar> = ({ zipCode }) => {
  return (
    <div className="flex flex-col-reverse w-full gap-14 opacity-60 text-center lg:flex-row lg:justify-between lg:gap-0">
      <Weather zipCode={zipCode} />
      <Alarm />
      <ClockNav />
    </div>
  );
};

export default ClockTopWidgetBar;
