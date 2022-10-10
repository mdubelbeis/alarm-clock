import { Link } from "react-router-dom";

const CLOCK_LIST = [
  { id: Math.random(), text: "STOP WATCH", link: "./stop-watch" },
  { id: Math.random(), text: "TIMER", link: "./timer" },
];

const ClockNav: React.FC = () => {
  const listItem = CLOCK_LIST.map((item) => {
    return (
      <li
        key={item.id}
        className="py-4 px-6 bg-black border-[1px] border-green-500 shadow-lg tracking-wider hover:text-black hover:bg-green-500 hover:cursor-pointer"
      >
        <Link to={item.link}>{item.text}</Link>
      </li>
    );
  });
  return (
    <nav>
      <ul className="flex gap-4 justify-center p-4 lg:flex-row lg:absolute lg:top-4 lg:right-4">
        {listItem}
      </ul>
    </nav>
  );
};

export default ClockNav;
