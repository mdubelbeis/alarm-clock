import { useState, useEffect } from "react";

const Time: React.FC = () => {
  const [output, setOutput] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setOutput(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <p className="font-digital text-4xl text-center bg-black text-green-500 py-10 rounded-xl">
      {output}
    </p>
  );
};

export default Time;
