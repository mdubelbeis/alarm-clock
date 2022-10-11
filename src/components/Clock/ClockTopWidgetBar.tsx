import React from "react";
import ClockNav from "./ClockNav";
import Weather from "./Weather";

const ClockTopWidgetBar: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-14 opacity-60 text-center lg:justify-start lg:flex-row lg:gap-0">
      <ClockNav />
      <Weather />
    </div>
  );
};

export default ClockTopWidgetBar;
