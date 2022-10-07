import { useState, ReactFragment } from "react";
import { Link } from "react-router-dom";
import HomeNav from "../Home/HomeNav";
import Icons from "./Icons";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full shadow-xl border-b-1 border-b-white xl:rounded-xl">
      <div className="lg:hidden">
        {!showMenu && (
          <div className="flex justify-between items-center w-full p-4">
            <div className="font-mono text-xl">
              <Link to="/">MULTI-TOOL</Link>
            </div>
            <div
              className="lg:hidden hover:cursor-pointer"
              onClick={() => setShowMenu(true)}
            >
              <Icons
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                width="w-10"
                id="hamburgerIcon"
              />
            </div>
          </div>
        )}
        {showMenu && <HomeNav onClick={setShowMenu} />}
      </div>
      <div className="hidden lg:block mx-auto">
        <div className="flex justify-between items-center w-full p-4">
          <div className="font-mono text-xl">
            <Link to="/">MULTI-TOOL</Link>
          </div>
          <div>
            <HomeNav onClick={() => {}} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
