import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./User.css";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
    <div className="navbar-color h-14 flex justify-between sm:justify-end items-center">
      <div className="font-playball sm:absolute left-0 right-0 sm:mx-auto w-1/4">
        Auto
      </div>
      <div className="flex items-center cursor-pointer">
        <Link to={'/login'}>
          <Button className="bg-transparent border-0">Login</Button>
        </Link>
        <Link to={'/signup'}>
          <Button className="rounded-full px-3 py-1 text-black bg-white border-0 mr-4 sm:mr-8">
            Signup
          </Button>
        </Link>
      </div>
    </div>
    <div
      className={`absolute bg-white left-0 top-full w-full items-center px-5 ${isMenuOpen ? "min-h-[35vh]" : "md:min-h-fit"}`}
      style={{ top: 'calc(100% + 0px)' }}  // Adjust to position below the header
    >
      <MdOutlineMenu
        onClick={onToggleMenu}
        className="text-3xl cursor-pointer md:hidden"
      />
      <ul
        className={`flex flex-col md:flex-row items-center gap-[3vw] ${isMenuOpen ? "block" : "hidden"} md:flex`}
      >
        <li>
          <a href="#" className="hover:text-gray-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-500">
            Driver
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-500">
            Ride
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-500">
            About
          </a>
        </li>
      </ul>
    </div>
  </header>
  
  );
}

export default Header;

