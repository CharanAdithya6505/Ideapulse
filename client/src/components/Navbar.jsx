import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("emailPrefix");
    setIsLoggedIn(!!token);
    if (email) {
      const username = email.split('@')[0];
      setUserProfile(username);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setUserProfile("");
    navigate("/auth");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
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

      <div className="sm:block hidden border border-gray-400">
        <Search />
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="sm:hidden">
        <button onClick={toggleMobileMenu} className="text-black">
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 p-4">
          <ul className="flex flex-col items-start">
            <li className="py-2">
              <Link to="/" className="text-gray-500 font-semibold hover:text-black">
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link to="/about" className="text-gray-500 font-semibold hover:text-black">
                About
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="py-2 flex items-center">
                <span className="text-gray-500 font-semibold mr-4">Hello, {userProfile}</span>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 font-semibold hover:text-black"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="py-2">
                <Link to="/auth" className="text-gray-500 font-semibold hover:text-black">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
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
        <li className="px-2 md:px-4">
          {isLoggedIn ? (
            <div className="flex items-center">
              <span className="text-gray-500 font-semibold mr-4">Hello, {userProfile}</span>
              <button
                onClick={handleLogout}
                className="text-gray-500 font-semibold hover:text-black"
              >
                Logout
              </button>
            </div>
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
    </header>
  );
};

export default Navbar;
