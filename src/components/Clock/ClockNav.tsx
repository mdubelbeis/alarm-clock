import { Link } from "react-router-dom";

const ClockNav: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-10">
        <li>
          <Link to="./stop-watch">Stop Watch</Link>
        </li>
        <li>
          <Link to="./timer">Timer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ClockNav;
