import { useState } from "react";
import CalcInput from "../components/Calculator/CalcInput";

const Calculator: React.FC = () => {
  const [calcOutput, setCalcOutput] = useState("0");
  return (
    <div className="text-center calc bg-slate-50 grid place-items-center py-4">
      <div id="calc-wrapper" className="bg-white w-full lg:w-9/12">
        <h2>{calcOutput}</h2>
        <CalcInput />
      </div>
    </div>
  );
};

export default Calculator;
