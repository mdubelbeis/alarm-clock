import { useState } from "react";
import CalcInput from "../components/Calculator/CalcInput";

const Calculator: React.FC = () => {
  const [calcOutput, setCalcOutput] = useState("0");
  return (
    <div className="bg-slate-50 grid mt-10 lg:p-12 rounded-xl shadow-xl">
      <div
        id="calc-wrapper"
        className="bg-black w-full max-w-2xl flex flex-col items-center mx-auto text-center p-4"
      >
        <h2 className="text-white text-right w-full lg:px-10 text-6xl py-20 bg-black">
          {calcOutput}
        </h2>
        <CalcInput />
      </div>
    </div>
  );
};

export default Calculator;
