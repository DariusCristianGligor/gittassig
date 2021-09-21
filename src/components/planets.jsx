import React, { Component } from "react";
import { ThemeContext } from "./../ThemeContext";
const Planets = ({ searchTerm }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { planets, darkMode } = context;
        let c = "";
        if (darkMode === true) c = "AnotherMode";
        return (
          <div>
            {planets
              .filter((planet) => {
                if (searchTerm == "") {
                  return planet;
                } else if (
                  planet.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return planet;
                }
              })
              .map((planet) => (
                <div key={planet.url} className={"people" + c}>
                  <p>Name:{planet.name}</p>
                  <p>Gravity:{planet.gravity}</p>
                  <p>Diameter:{planet.diameter}</p>
                  <p>Population:{planet.population}</p>
                </div>
              ))}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
export default Planets;
