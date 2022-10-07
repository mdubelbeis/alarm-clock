import { Link } from "react-router-dom";
import Icons from "../ui/Icons";

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
];

interface HomeNavProps {
  onClick: (bool: boolean) => void;
}

const HomeNav: React.FC<HomeNavProps> = ({ onClick }) => {
  return (
    <nav className="absolute top-0 left-0 bg-black text-white w-full h-screen grid place-content-center lg:flex lg:static lg:bg-white lg:text-black lg:w-auto lg:h-auto">
      <div
        className="absolute top-6 left-6 font-mono text-xl lg:hidden"
        onClick={() => onClick(false)}
      >
        <Link to="/">MULTI-TOOL</Link>
      </div>
      <div
        className="absolute justify-self-end p-4 lg:hidden"
        onClick={() => onClick(false)}
      >
        <Icons d="M6 18L18 6M6 6l12 12" />
      </div>
      <ul className="flex flex-col gap-20 lg:flex-row">
        {ICON_DIMENSION.map((icon) => {
          return (
            <li
              onClick={() => onClick(false)}
              className="flex flex-col justify-center items-center lg:flex-row"
            >
              <sub className="text-sm">{icon.name}</sub>
              <Link to={icon.url}>
                <Icons d={icon.d} width="w-20 lg:w-6" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HomeNav;
