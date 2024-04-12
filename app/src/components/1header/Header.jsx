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

import Aplayer from "./Aplayer.jsx";

// images
import tabla1 from "../../assets/pngs/bmi.jpg";
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
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
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
    <header className="header w-full  px-8 h-auto  "
    style={{ background: props.theme.body, color: props.theme.text }}

    >
      <NavLink to={link} tag={Link} className="logo">
        <div className=" grid grid-flow-col place-items-center">
          <span className="logo-name">{greeting.logo_name}</span>
          <div className=" w-9">
            <img src={tabla1} />
          </div>
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
            className="ec"
            to="/updates"
            tag={Link}
            style={{ borderRadius: 5, color: theme.text }}
          >
            News and Admissions
          </NavLink>
        </li>
        <li>
          <NavLink
            className="xp"
            to="/gallery"
            tag={Link}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Gallery
          </NavLink>
        </li>
       
        <li>
          <NavLink
            className="cr"
            to="/aboutUs"
            tag={Link}
            style={{ borderRadius: 5, color: theme.text }}
          >
            Aboutus and Contacts
          </NavLink>
        </li>

        <li>
          <NavLink
            className="projects"
            to="/shop"
            tag={Link}
            style={{ borderRadius: 5, color: theme.text }}
          >
            shop
          </NavLink>
        </li>

        <div className="grid grid-flow-col place-items-center gap-1 ">
          <button className=" flex " {...styles} onClick={changeTheme}>
            {icon}
          </button>

          <button className=" flex " {...styles}>
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
          to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="w-full rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </div>
      </ul>
    </header>
    // </Fade>
  );
}

export default Header;
