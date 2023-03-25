import React from "react";
import Link from "next/link";

function Navbar() {
  const [menuActive, setMenuActive] = React.useState(true);

  const handleMenu = (e) => {
    e.preventDefault();
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <nav className="bg-background text-title-white">
        <div className="py-4 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between px-3 ">
            <div className="text-2xl font-bold transition-colors duration-200 transform lg:text-3xl">
              <Link href="#">GameCenter</Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className=""
                aria-label="toggle menu"
                onClick={handleMenu}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
