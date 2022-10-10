import { useState, useEffect } from "react";
import Weather from "../Clock/Weather";

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
      <p className="flex items-center justify-center font-digital text-4xl md:text-7xl px-4 py-10 lg:px-10 lg:text-9xl text-center w-full h-96 bg-black text-green-500 rounded-xl lg:py-32 drop-shadow-xl">
        {output}
      </p>
      <div className="absolute top-4 left-10 text-white">
        <Weather />
      </div>
    </div>
  );
};

export default Time;
