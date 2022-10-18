import { useState } from "react";
import CalcInput from "../components/Calculator/CalcInput";

const Calculator: React.FC = () => {
  const [calcOutput, setCalcOutput] = useState("0");
  return (
    <div className="text-center">
      <div id="calc-wrapper">
        <h2>{calcOutput}</h2>
        <CalcInput />
      </div>
    </div>
  );
};

export default Calculator;
