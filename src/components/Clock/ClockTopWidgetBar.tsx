import React from "react";
import ClockNav from "./ClockNav";
import Weather from "./Weather";

const ClockTopWidgetBar: React.FC = () => {
  return (
    <div className="flex flex-col w-full justify-center opacity-60 text-center lg:flex-row ">
      <ClockNav />
      <Weather />
    </div>
  );
};

export default ClockTopWidgetBar;
