import { Link } from "react-router-dom";

const CLOCK_LIST = [
  { id: Math.random(), text: "STOP WATCH", link: "./stop-watch" },
  { id: Math.random(), text: "TIMER", link: "./timer" },
];

const ClockNav: React.FC = () => {
  const listItem = CLOCK_LIST.map((item) => {
    return (
      <li className="py-4 px-6 bg-black text-white tracking-wider rounded-lg">
        <Link to={item.link}>{item.text}</Link>
      </li>
    );
  });
  return (
    <nav>
      <ul className="flex gap-4">{listItem}</ul>
    </nav>
  );
};

export default ClockNav;
