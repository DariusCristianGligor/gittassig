import React from "react";
import { ThemeContext } from "./../ThemeContext";

const Starship = ({ searchTerm }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { starships, darkMode } = context;
        let c = "";
        if (darkMode === true) c = "AnotherMode";
        return (
          <div>
            {starships
              .filter((starship) => {
                console.log(searchTerm);
                if (searchTerm == "") {
                  return starship;
                } else if (
                  starship.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  console.log("asdasd");
                  return starship;
                }
              })
              .map((starship) => (
                <div key={starship.url} className={"starship" + c}>
                  <p>Name:{starship.name}</p>
                  <p>Passengers:{starship.passengers}</p>
                  <p>Hyperdrive rating:{starship.hyperdrive_rating}</p>
                  <p>Starship_class:{starship.starship_class}</p>
                </div>
              ))}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
export default Starship;
