import { useState, useEffect } from "react";
import Weather from "../Clock/Weather";

const Time: React.FC = () => {
  const [output, setOutput] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setOutput(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <div className="relative">
      <p className="font-digital text-4xl py-10 lg:text-9xl text-center w-10/12 lg:w-full lg:h-96 bg-black text-green-500 rounded-xl lg:py-32 drop-shadow-xl">
        {output}
      </p>
      <div className="absolute top-4 left-10 text-white">
        <Weather />
      </div>
    </div>
  );
};

export default Time;
