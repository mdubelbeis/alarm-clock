import { Link } from "react-router-dom";
import Icons from "./ui/Icons";

const ICON_DIMENSION = [
  {
    d: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75",
    url: "/Todo",
    name: "TODO",
  },

  {
    d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    url: "/clock",
    name: "CLOCK",
  },
  {
    d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    url: "/notes",
    name: "NOTES",
  },
  {
    d: "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z",
    url: "/calculator",
    name: "CALCULATOR",
  },
];

interface MobileNavProps {
  onClick: (bool: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onClick }) => {
  return (
    <nav className="fixed z-50 top-0 left-0 bg-black text-white w-full h-screen grid place-content-center lg:flex lg:static lg:bg-white lg:text-black lg:w-auto lg:h-auto">
      <div
        className="absolute top-6 left-6 font-mono text-xl lg:hidden hover:text-blue-500 active:text-blue-700 tracking-wider"
        onClick={() => onClick(false)}
      >
        <Link to="/">
          <span className="text-blue-500">MULTI</span>-TOOL
        </Link>
      </div>
      <div
        className="absolute justify-self-end p-4 lg:hidden"
        onClick={() => onClick(false)}
      >
        <Icons d="M6 18L18 6M6 6l12 12" id="closeMenuIcon" />
      </div>
      <ul className="flex flex-col items-center gap-10 lg:flex-row lg:bg-white">
        {ICON_DIMENSION.map((icon) => {
          return (
            <li
              key={icon.name}
              onClick={() => onClick(false)}
              className="flex flex-col justify-center items-center lg:flex-row"
            >
              <Link
                to={icon.url}
                className="flex items-center gap-1 active:text-blue-700 hover:text-blue-500"
              >
                <p className="text-sm">{icon.name}</p>
                <Icons d={icon.d} width="w-20 lg:w-6" id={icon.name} />
              </Link>
            </li>
          );
        })}
      </ul>
      <footer className="fixed bottom-0 left-0 py-4 flex flex-col justify-center items-center bg-black w-screen text-white">
        <div>
          <small>Designed and Developed by: </small>
          <a
            href="https://www.masondubelbeis.com"
            className="text-blue-500 p-2"
          >
            Mason J. Dubelbeis
          </a>
        </div>
        <div>
          <small>&copy; 2022</small>
        </div>
      </footer>
    </nav>
  );
};

export default MobileNav;
