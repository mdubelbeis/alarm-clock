import { useState } from "react";

interface CalcInputProps {
  setCalcOutput: (value: string) => void;
}

const CalcInput: React.FC<CalcInputProps> = ({ setCalcOutput }) => {
  const [trStyles, setTrStyles] = useState(
    "grid grid-cols-4 grid-rows-1 gap-2"
  );
  const [tdStyles, setTdStyles] = useState(
    "py-4 px-8 text-lg bg-slate-500 grid-col-1 grid-row-1 rounded-sm hover:cursor-pointer hover:bg-slate-700 hover:text-white"
  );
  const [tdSpecialChars, setTdSpecialChars] = useState(
    "bg-dull-orange hover:bg-orange-400"
  );

  const handleInputClick = (value: string) => {
    setCalcOutput(value);
  };

  return (
    <table className="w-full grid grid-cols-1 grid-rows-5 gap-2 py-4">
      <tr className={`${trStyles}`}>
        <td
          onClick={() => handleInputClick("C")}
          className={`${tdStyles} ${tdSpecialChars}`}
        >
          AC
        </td>
        <td
          onClick={() => handleInputClick("/")}
          className={`${tdStyles} ${tdSpecialChars}`}
        >
          /
        </td>
        <td
          onClick={() => handleInputClick("X")}
          className={`${tdStyles} ${tdSpecialChars}`}
        >
          X
        </td>
        <td
          onClick={() => handleInputClick("%")}
          className={`${tdStyles} ${tdSpecialChars}`}
        >
          %
        </td>
      </tr>
      <tr className={`${trStyles}`}>
        <td onClick={() => handleInputClick("7")} className={tdStyles}>
          7
        </td>
        <td onClick={() => handleInputClick("8")} className={tdStyles}>
          8
        </td>
        <td onClick={() => handleInputClick("9")} className={tdStyles}>
          9
        </td>
        <td
          onClick={() => handleInputClick("+")}
          className={`${tdStyles} ${tdSpecialChars}`}
        >
          +
        </td>
      </tr>
      <tr className={`${trStyles}`}>
        <td onClick={() => handleInputClick("4")} className={tdStyles}>
          4
        </td>
        <td onClick={() => handleInputClick("5")} className={tdStyles}>
          5
        </td>
        <td onClick={() => handleInputClick("6")} className={tdStyles}>
          6
        </td>
        <td
          onClick={() => handleInputClick("-")}
          className={`${tdStyles} ${tdSpecialChars}`}
        >
          -
        </td>
      </tr>
      <tr className={`${trStyles}`}>
        <td onClick={() => handleInputClick("1")} className={tdStyles}>
          1
        </td>
        <td onClick={() => handleInputClick("2")} className={tdStyles}>
          2
        </td>
        <td onClick={() => handleInputClick("3")} className={tdStyles}>
          3
        </td>
        <td
          onClick={() => handleInputClick("=")}
          className={`${tdStyles} ${tdSpecialChars}`}
        >
          =
        </td>
      </tr>
      <tr className={`${trStyles}`}>
        <td
          onClick={() => handleInputClick("0")}
          className={`${tdStyles} col-span-2`}
        >
          0
        </td>
        <td onClick={() => handleInputClick(".")} className={`${tdStyles}`}>
          .
        </td>
        <td
          onClick={() => handleInputClick("md")}
          className={`${tdStyles} bg-white text-dull-yellow`}
        >
          md
        </td>
      </tr>
    </table>
  );
};

export default CalcInput;

/* 
<div id="AC" class="btn">AC</div>
<div id="divsion" class="btn">/</div>
<div id="times" class="btn">X</div>
<div id="percentage" class="btn">%</div>
<div id="seven" class="btn">7</div>
<div id="eight" class="btn">8</div>
<div id="nine" class="btn">9</div>
<div id="add" class="btn">+</div>
<div id="four" class="btn">4</div>
<div id="five" class="btn">5</div>
<div id="six" class="btn">6</div>
<div id="subtract" class="btn">-</div>
<div id="one" class="btn">1</div>
<div id="two" class="btn">2</div>
<div id="three" class="btn">3</div>
<div id="equals" class="btn">=</div>
<div id="zero" class="btn">0</div>
<div id="period" class="btn">.</div> 
*/
