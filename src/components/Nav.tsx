import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    });
  }, []);
  return (
    <>
      <nav className="sm:px-13 max-sm:px-8 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="h-[100px] w-[100px] max-sm:h-[70px] max-sm:w-[70px] max-sm:mt-2"
          >
            <img src="/assets/logo.png" alt="logo" />
          </Link>

          {/* Search Input */}
          <div className="grow flex justify-center">
            <input
              type="text"
              placeholder="Search by Title, Author, Publisher or ISBN"
              className="w-[50%] max-sm:w-[80%] border border-gray-300 focus:border-gray-800 rounded-md outline-none py-1 px-2"
            />
          </div>

          {/* Burger Menu Icon (Mobile Only) */}
          <div
            ref={menuIconRef}
            className="sm:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Navigation Links */}
          <div
            ref={menuRef}
            className={`z-[999] max-sm:fixed max-sm:top-[80px] max-sm:right-[5px] max-sm:bg-white max-sm:px-4 max-sm:border max-sm:border-gray-300 rounded-lg max-sm:py-7 transition-all duration-200 
              ${isMenuOpen ? "block" : "hidden"} sm:block`}
          >
            <ul className="list-none flex max-sm:flex-col sm:gap-12 gap-5 max-sm:items-center">
              <li>
                <Link
                  to="/home"
                  onClick={handleLinkClick}
                  className="hover:text-black/60"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  onClick={handleLinkClick}
                  className="hover:text-black/60"
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="hover:text-black/60"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
