import { useState, useEffect } from "react";
import React from "react";
import Alarm from "./Alarm";
import ClockNav from "./ClockNav";
import Weather from "./Weather";

interface ClockTopWidgetBarProps {
  zip: string;
}

const ClockTopWidgetBar: React.FC<ClockTopWidgetBarProps> = ({ zip }) => {
  return (
    <div className="flex flex-col-reverse w-full gap-14 opacity-60 text-center lg:flex-row lg:justify-between lg:gap-0">
      <Weather zip={zip} />
      <Alarm />
      <ClockNav />
    </div>
  );
};

export default ClockTopWidgetBar;
