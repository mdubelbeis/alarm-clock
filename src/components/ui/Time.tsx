import { useState, useEffect } from "react";

const Time: React.FC = () => {
  const [output, setOutput] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setOutput(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <p className="font-digital text-9xl text-center w-full h-96 bg-black text-green-500 rounded-xl py-32 drop-shadow-xl">
      {output}
    </p>
  );
};

export default Time;
