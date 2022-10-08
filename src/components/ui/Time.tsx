import { useState, useEffect } from "react";

const Time: React.FC = () => {
  const [output, setOutput] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setOutput(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <p className="font-digital text-4xl py-10 lg:text-9xl text-center w-10/12 lg:w-full lg:h-96 bg-black text-green-500 rounded-xl lg:py-32 drop-shadow-xl">
      {output}
    </p>
  );
};

export default Time;
