/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Header.css";
// import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../assets/portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

import { IoMdLogIn } from "react-icons/io";
import { TbLogin } from "react-icons/tb";


import Aplayer from "./Aplayer.jsx";

// images
import kalasha from "../../assets/pngs/kalasha.png";
import { useMyContext } from "../../App.jsx";

import { useSelector } from "react-redux";


function Header(props) {
  const { currentUser } = useSelector((state) => state.user);

  // console.log("user PP", currentUser.profilePicture)

  const { setThemeMode, setTablaMode, tablaMode, themeMode } = useMyContext();

  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const link = settings.isSplash ? "/splash" : "home";
  const [currTheme, setCurrTheme] = useState(props.theme);

  // function for theme changing
  function changeTheme() {
    if (currTheme === "light") {
      setThemeMode("dark");
      // localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      setThemeMode("light");
      // localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    // <Fade top duration={1000} distance="20px">
    <header
      className="header w-full  px-8 h-auto  "
      style={{ background: props.theme.body, color: props.theme.text }}
    >
      <NavLink to={link} tag={Link} className="logo">
        <div className=" grid-flow-row  grid place-items-start ">
          <div className=" grid grid-flow-col place-items-center">
            <span className="logo-name grid place-items-start ">
              {greeting.logo_name}
            </span>
            <div className=" w-9">
              <img src={kalasha} />
            </div>
          </div>
          <div className=" text-sm">{greeting.logo_desc}</div>
        </div>
      </NavLink>

      <input className="menu-btn " type="checkbox" id="menu-btn" />

      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon "></span>
      </label>

      <ul className="menu ">
        <li>
          <NavLink
            className="homei"
            to="/home"
            tag={Link}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className="xp"
            to="/events"
            tag={Link}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Events & About
          </NavLink>
        </li>

        <li>
          <NavLink
            className="projects"
            to="/shop"
            tag={Link}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Manufacture
          </NavLink>
        </li>

        <li>
          <NavLink
            className="ec"
            to="/admission"
            tag={Link}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Admission
          </NavLink>
        </li>

        <div className="grid grid-flow-col place-items-center gap-1 ">
          <button
            className=" flex bg-blue-500 bg-opacity-50 "
            {...styles}
            onClick={changeTheme}
          >
            {icon}
          </button>

          <button className=" flex bg-green-500 bg-opacity-50 " {...styles}>
            {
              <Aplayer
                setTabla={setTablaMode}
                tabla={tablaMode}
                theme={themeMode}
              />
            }
          </button>

          <Link
            {...styles}
            to="/profile"
            className=" bg-pink-500 bg-opacity-50 flex justify-center items-center"
          >
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="w-full rounded-full  object-cover"
              />
            ) : (
              <div>

                <li className=""><TbLogin size={30} /></li>
              </div>
            )}
          </Link>
        </div>
      </ul>
    </header>
    // </Fade>
  );
}

export default Header;
