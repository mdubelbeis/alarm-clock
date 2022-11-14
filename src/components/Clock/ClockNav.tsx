import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const CLOCK_LIST = [
  { id: uuidv4(), text: "STOP WATCH", link: "./stop-watch" },
  { id: uuidv4(), text: "TIMER", link: "./timer" },
];

const ClockNav: React.FC = () => {
  const listItem = CLOCK_LIST.map((item) => {
    return (
      <li
        key={item.id}
        className="py-4 px-6 bg-black rounded-lg border-[1px] border-opacity-40 border-green-500 shadow-lg tracking-wider hover:text-black hover:bg-green-500 hover:cursor-pointer"
      >
        <Link to={item.link}>{item.text}</Link>
      </li>
    );
  });
  return (
    <nav>
      <ul className="flex gap-4 justify-center lg:flex-row lg:absolute lg:top-4 lg:right-4">
        {listItem}
      </ul>
    </nav>
  );
};

export default ClockNav;
