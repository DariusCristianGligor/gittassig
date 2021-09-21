import React, { Component, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { ThemeContext } from "./../ThemeContext";
import { useHistory } from "react-router-dom";
const NavBar2 = (search) => {
  const { searchTerm, setSearchTerm } = search;
  const history = useHistory();
  const redirect = () => {
    history.goBack();
  };
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { count, darkMode, handleAnotherMode } = context;
        console.log(count);
        let c = "bg-info";
        let d = "";
        if (darkMode === true) {
          c = "bg-primary";
          d = "Another";
        }

        return (
          <nav className={"navbar navbar-expand-lg navbar-light " + c}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="#">
                gdc22
              </Link>
              <p>
                <FaAngleDoubleLeft
                  className="back"
                  onClick={redirect}
                ></FaAngleDoubleLeft>
              </p>
              <p className="crsp">
                <GoDeviceCameraVideo></GoDeviceCameraVideo> {count}
              </p>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      People
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/films">
                      Films
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/starship">
                      Starship
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/vehicles">
                      Vehicles
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/species">
                      Species
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/planets">
                      Planets
                    </NavLink>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                  />
                </form>
              </div>
              <button
                className={"buttonChangeMode" + d}
                onClick={() => handleAnotherMode()}
              >
                Another Mode
              </button>
            </div>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
};
export default NavBar2;
