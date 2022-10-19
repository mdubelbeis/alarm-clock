import { useState } from "react";
import CalcInput from "../components/Calculator/CalcInput";

const Calculator: React.FC = () => {
  const [calcOutput, setCalcOutput] = useState("0");
  const [operation, setOperation] = useState("");

  const handleCalcOutput = (value: string) => {
    setCalcOutput(value);
  };

  return (
    <div className="bg-slate-50 grid mt-16 lg:mt-8 lg:p-12 rounded-xl shadow-xl p-4">
      <div
        id="calc-wrapper"
        className="bg-slate-800 w-full max-w-2xl flex flex-col items-center mx-auto rounded-xl text-center p-4"
      >
        <h2 className="text-white text-right w-full lg:px-10 text-6xl py-12 lg:py-16 bg-slate-900 rounded-lg pr-4">
          {calcOutput}
        </h2>
        <CalcInput setCalcOutput={handleCalcOutput} />
      </div>
    </div>
  );
};

export default Calculator;
