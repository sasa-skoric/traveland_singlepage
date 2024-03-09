import { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-scroll";

import "./CSS/Navbar.css";

const Navbar = () => {
  const [mobNav, setMobNav] = useState<boolean>(false);

  const toggleMobNav = () => {
    setMobNav(!mobNav);
  };

  return (
    <div
      id="home"
      className={mobNav ? "navbar navbar_background active" : "navbar"}
    >
      <div className="logo">
        <h2>TraveLand</h2>
      </div>

      <ul className="nav_menu">
        <Link className="link" smooth={true} duration={500} to="home">
          <li>Home</li>
        </Link>

        <Link className="link" smooth={true} duration={500} to="destinations">
          <li>Destinations</li>
        </Link>

        <Link className="link" smooth={true} duration={500} to="travel">
          <li>Travel</li>
        </Link>

        <Link className="link" smooth={true} duration={550} to="book">
          <li>Book</li>
        </Link>

        <Link className="link" smooth={true} duration={600} to="views">
          <li>Views</li>
        </Link>
      </ul>

      <div className="nav_icons">
        <BiSearch className="icon" />
        <BsFillPersonFill className="icon" />
      </div>

      <div className="hamburger" onClick={toggleMobNav}>
        {!mobNav ? <FaBars className="icon" /> : <IoClose className="icon" />}
      </div>

      <div className={mobNav ? "mobile_menu active" : "mobile_menu"}>
        <ul className="mobile_nav">
          <Link
            className="link"
            smooth={true}
            duration={500}
            to="home"
            onClick={toggleMobNav}
          >
            <li>Home</li>
          </Link>

          <Link
            className="link"
            smooth={true}
            duration={500}
            to="destinations"
            onClick={toggleMobNav}
          >
            <li>Destination</li>
          </Link>

          <Link
            className="link"
            smooth={true}
            duration={600}
            to="travel"
            onClick={toggleMobNav}
          >
            <li>Travel</li>
          </Link>

          <Link
            className="link"
            smooth={true}
            duration={700}
            to="book"
            onClick={toggleMobNav}
          >
            <li>Book</li>
          </Link>

          <Link
            className="link"
            smooth={true}
            duration={800}
            to="views"
            onClick={toggleMobNav}
          >
            <li>Views</li>
          </Link>
        </ul>

        <div className="mobile_menu_bottom">
          <div className="menu_icons">
            <button>Search</button>
            <button>Account</button>
          </div>

          <div className="social_media">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
