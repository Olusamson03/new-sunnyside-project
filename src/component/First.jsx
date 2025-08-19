import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import arrow from "../assets/icon-arrow-down.svg";
import image200 from "../assets/icon-hamburger.svg";

function First() {
  const [showNav, setShowNav] = useState(false);
  const handleHamburgerClick = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <header className="top">
        <nav className="new">
          <Link to={"/"}>
            <img src={logo} alt="" srcSet="" />
          </Link>
          <img
            src={image200}
            alt=""
            srcSet=""
            style={{ cursor: "pointer" }}
            onClick={handleHamburgerClick}
          />
          {showNav && (
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                top: "80px",
                width: "75px",
                right: "20px",
                background: "black",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                padding: "20px",
                zIndex: 100,
              }}
            >
              <li>
                <Link to={"/about"} className="crown">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/services"} className="crown">
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/projects"} className="crown">
                  Project
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="marker">
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </nav>
        <h1 style={{ fontFamily: "fraunces", fontSize: "3rem" }}>
          WE ARE CREATIVES
        </h1>
        <div className="past">
          <img src={arrow} alt="" srcSet="" />
        </div>
      </header>
    </>
  );
}

export default First;
