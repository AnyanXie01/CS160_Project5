import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NavBar.css";
import LogoutIcon from "./images/logout.png";
import logImage from "./images/Logo.png";
import menu from "./images/Hamburger.png";
import { PhoneSideMenu } from "../phone-size-sideMenu/PhoneSideMenu";
import { useEffect } from "react";
import { useRef } from "react";
export function NavBar(props) {
  const [sideMenu, setSideMenu] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);
  const sideMenuRef = useRef(null);
  const profileImage =
    localStorage.getItem("userPicturePath") === ""
      ? require("../../../pictures/place-holder.png")
      : require("../../../pictures/" + localStorage.getItem("userPicturePath"));
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideMenu &&
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target) &&
        !event.target.classList.contains("hambuger-container")
      ) {
        setSideMenu(false);
        setShowHamburger(true);
      }
    };

    if (sideMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideMenu]);

  function showSideMenu() {
    setSideMenu(true);
    setShowHamburger(false);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 700) {
        setSideMenu(false);
        setShowHamburger(false);
      } else {
        setShowHamburger(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userPicturePath");
    window.location.href = "http://localhost:3000/login";
  };

  function ProfileComponent() {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
      <div style={{ position: "relative" }}>
        <img
          src={profileImage}
          className="profile-pic nav-link"
          style={{ width: "48px", height: "48px", cursor: "pointer" }}
          onClick={() => setShowOverlay(!showOverlay)}
        />

        {showOverlay && (
          <div className="overlay">
            <div className="overlay-container">
              <img className="icon" src={profileImage}></img>
              <div className="user-data-container">
                <h1>First Last</h1>
                <p>youremail@here.com</p>
              </div>
            </div>
            <div className="logout-button" onClick={handleLogOut}>
              <img className="small-icon" src={LogoutIcon}></img>
              <p>Log out</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-link nav-left-container">
          <img
            src={logImage}
            alt="logo"
            style={{ width: "41.4px", height: "28.016px" }}
          />
          <h2>InternConnect</h2>
        </Link>
        <div className="nav-right-container">
          <Link to="/communities" className="nav-link">
            <button
              className={
                props.navButtonSelection === "communities"
                  ? "selected-nav-Button"
                  : ""
              }
            >
              Communities
            </button>
          </Link>
          <Link to="/resume-builder" className="nav-link">
            <button
              className={
                props.navButtonSelection === "resumeBuilder"
                  ? "selected-nav-Button"
                  : ""
              }
            >
              Resume Builder
            </button>
          </Link>
          <Link to="/resources" className="nav-link">
            <button
              className={
                props.navButtonSelection === "resources"
                  ? "selected-nav-Button"
                  : ""
              }
            >
              Resources
            </button>
          </Link>
          <ProfileComponent></ProfileComponent>
        </div>
      </div>
      <div className="nav-small-container">
        {showHamburger ? (
          <button className="hambuger-container" onClick={showSideMenu}>
            {" "}
            <img
              src={menu}
              alt="menu button"
              style={{ width: "60px", height: "60px" }}
            />
          </button>
        ) : (
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "transparent",
            }}
          ></div>
        )}
        <ProfileComponent></ProfileComponent>
      </div>

      {sideMenu ? (
        <div className="side-menu-container">
          {sideMenu && <PhoneSideMenu sideMenuRef={sideMenuRef} />}
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
