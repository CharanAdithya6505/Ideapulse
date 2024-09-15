import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    // Remove the token from localStorage on logout
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/auth");
  };

  return (
    <header
      className={`flex items-center justify-between py-4 border-b z-[10001] transition-all duration-300 ease-in ${
        isScrolled ? "fixed bg-white shadow-md md:px-32 top-0 left-0 right-0" : ""
      }`}
    >
      <a
        href="/"
        className="px-2 lg:px-0 uppercase font-bold text-black"
        style={{ fontSize: "35px" }}
      >
        IdeaPulse
      </a>

      <div className="sm:block hidden">
        <Search />
      </div>

      <ul className="md:inline-flex items-center hidden">
        <li className="px-2 md:px-4">
          <Link to="/" className="text-gray-500 font-semibold hover:text-black">
            Home
          </Link>
        </li>
        <li className="px-2 md:px-4">
          <Link to="/about" className="text-gray-500 font-semibold hover:text-black">
            About
          </Link>
        </li>
        {/* <li className="px-2 md:px-4">
          <a href="#" className="text-gray-500 font-semibold hover:text-black">
            Press
          </a>
        </li> */}
        <li className="px-2 md:px-4">
          <a href="#" className="text-gray-500 font-semibold hover:text-black">
            Contact
          </a>
        </li>
        <li className="px-2 md:px-4 hidden md:block">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-gray-500 font-semibold hover:text-black"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth"
              className="text-gray-500 font-semibold hover:text-black"
            >
              Login
            </Link>
          )}
        </li>
      </ul>

      <ul className="sm:hidden">
        <li className="px-2 md:px-4">
          <Link
            to="/"
            className="text-purple-600 font-semibold hover:text-purple-500"
          >
            <FaBars />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
