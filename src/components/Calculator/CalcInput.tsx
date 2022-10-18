import { useState } from "react";

const CalcInput: React.FC = () => {
  const [trStyles, setTrStyles] = useState(
    "grid grid-cols-4 grid-rows-1 gap-2"
  );
  const [tdStyles, setTdStyles] = useState(
    "place-items-center py-2 px-4 font-lg bg-slate-500"
  );

  return (
    <table className="w-full grid gap-2">
      <tr className={`${trStyles}`}>
        <td className={`${tdStyles} bg-dull-orange`}>C</td>;
        <td className={`${tdStyles} bg-dull-orange`}>/</td>
        <td className={`${tdStyles} bg-dull-orange`}>X</td>
        <td className={`${tdStyles} bg-dull-orange`}>%</td>
      </tr>
      <tr className={`${trStyles}`}>
        <td className={`${tdStyles}`}>7</td>
        <td className={`${tdStyles}`}>8</td>
        <td className={`${tdStyles}`}>9</td>
        <td className={`${tdStyles} bg-dull-orange`}>+</td>
      </tr>
      <tr className={`${trStyles}`}>
        <td className={`${tdStyles}`}>4</td>
        <td className={`${tdStyles}`}>5</td>
        <td className={`${tdStyles}`}>6</td>
        <td className={`${tdStyles} bg-dull-orange`}>-</td>
      </tr>
      <tr className={`${trStyles}`}>
        <td className={`${tdStyles}`}>1</td>
        <td className={`${tdStyles}`}>2</td>
        <td className={`${tdStyles}`}>3</td>
        <td className={`${tdStyles} bg-dull-orange`}>=</td>
      </tr>
      <tr className={`${trStyles}`}>
        <td className={`${tdStyles}`}>0</td>
        <td className={`${tdStyles} bg-dull-orange`}>.</td>
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
