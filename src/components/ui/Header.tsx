import { useState } from "react";
import HomeNav from "../Home/HomeNav";
import Icons from "./Icons";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed top-0 flex justify-between items-center">
      <div className="font-mono text-4xl">MULTI-TOOL</div>
      <div className="" onClick={() => setShowMenu(true)}>
        <Icons d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </div>
      {showMenu && <HomeNav onClick={setShowMenu} />}
    </header>
  );
};

export default Header;
