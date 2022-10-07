import { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [output, setOutput] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setOutput(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <p className="font-digital text-4xl text-center mt-20 bg-black py-10 rounded-xl">
      {output}
    </p>
  );
};

export default Clock;
