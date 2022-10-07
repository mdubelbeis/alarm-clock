import { Link } from "react-router-dom";

const CLOCK_LIST = [
  { id: Math.random(), text: "STOP WATCH", link: "./stop-watch" },
  { id: Math.random(), text: "TIMER", link: "./timer" },
];

const ClockNav: React.FC = () => {
  const listItem = CLOCK_LIST.map((item) => {
    return (
      <li className="py-4 px-6 bg-white text-black shadow-lg tracking-wider rounded-lg hover:bg-black hover:text-white hover:cursor-pointer">
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
