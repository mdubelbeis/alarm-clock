import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

const StopWatch: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="py-4 px-6 bg-black text-white tracking-wider rounded-lg">
            <Link to="/">CLOCK</Link>
          </li>
        </ul>
      </nav>
      <Timer />
    </div>
  );
};

export default StopWatch;
