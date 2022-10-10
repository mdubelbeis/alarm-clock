import { useState, useEffect } from "react";
import Weather from "../Clock/Weather";
import Weekday from "./Weekday";

const Time: React.FC = () => {
  let timeOutput = new Date().toLocaleTimeString();
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
    <div className="relative w-full px-4">
      <p className="flex items-center justify-center font-digital text-4xl md:text-7xl px-4 py-12 lg:px-10 lg:text-8xl text-center w-full h-96 bg-black text-green-500 rounded-xl lg:py-32 drop-shadow-xl">
        {output}
      </p>
      <div className="absolute top-4 left-0 w-full text-white">
        <Weather />
      </div>
      <div className="absolute bottom-4 left-0 w-full text-white">
        <Weekday />
      </div>
    </div>
  );
};

export default Time;
