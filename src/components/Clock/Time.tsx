import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

const Time: React.FC = () => {
  let timeOutput = useAppSelector((state) => state.clockStore.time);
  let filteredOutput = timeOutput.replace("M", "");
  const [output, setOutput] = useState(filteredOutput);

  useEffect(() => {
    setInterval(() => {
      timeOutput = new Date().toLocaleTimeString();
      filteredOutput = timeOutput.replace("M", "");
      setOutput(filteredOutput);
    }, 1000);
  });

  return (
    <>
      <div className="relative w-full px-4 py-10 md:py-20 lg:py-10 lg:mt-32">
        <p className="flex items-center justify-center drop-shadow-xl shadow-green-500 font-digital text-4xl sm:text-6xl md:text-7xl px-4 lg:py-20 lg:text-9xl text-center w-full">
          <span className="shadow-lg opacity-40">{output}</span>
        </p>
      </div>
      <div></div>
    </>
  );
};

export default Time;
