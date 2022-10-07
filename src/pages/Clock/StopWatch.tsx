import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../components/ui/Icons";

const StopWatch: React.FC = () => {
  return (
    <div className="flex flex-col h-72 justify-around items-center">
      <div>
        <Icons
          id="playPauseIcon"
          d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
        />
        <Icons
          id="stopIcon"
          d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
        />
      </div>
      <div>TIME</div>
      <nav>
        <ul>
          <li>
            <Link to="/clock">
              <Icons
                id="backIcon"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StopWatch;
