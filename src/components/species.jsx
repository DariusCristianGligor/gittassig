import React, { Component } from "react";
import { ThemeContext } from "./../ThemeContext";
const Species = ({ searchTerm }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { species, darkMode } = context;
        let c = "";
        if (darkMode === true) c = "AnotherMode";
        return (
          <div>
            {species
              .filter((specie) => {
                if (searchTerm == "") {
                  return specie;
                } else if (
                  specie.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return specie;
                }
              })
              .map((specie) => (
                <div key={specie.url} className={"people" + c}>
                  <p>Name:{specie.name}</p>
                  <p>Skin:{specie.skin_colors}</p>
                  <p>Eye colors:{specie.eye_colors}</p>
                  <p>Language:{specie.language}</p>
                </div>
              ))}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
export default Species;
