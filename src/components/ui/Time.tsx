import { useState, useEffect } from "react";

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
      <p className="flex items-center justify-center drop-shadow-xl shadow-green-500 font-digital text-4xl md:text-7xl px-4 py-12 lg:px-10 lg:text-8xl text-center w-full ">
        <span className="shadow-lg opacity-60">{output}</span>
      </p>
    </div>
  );
};

export default Time;
