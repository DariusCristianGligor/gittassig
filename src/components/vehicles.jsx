import React, { Component } from "react";
import { ThemeContext } from "./../ThemeContext";
const Vehicles = ({ searchTerm }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { vehicles, darkMode } = context;
        let c = "";
        if (darkMode === true) c = "AnotherMode";
        return (
          <div>
            {vehicles
              .filter((vehicle) => {
                console.log(searchTerm);
                if (searchTerm == "") {
                  return vehicle;
                } else if (
                  vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  console.log("asdasd");
                  return vehicle;
                }
              })
              .map((vehicle) => (
                <div key={vehicle.url} className={"vehicle" + c}>
                  <p>Name:{vehicle.name}</p>
                  <p>Passengers:{vehicle.passengers}</p>
                  <p>vehicle_class:{vehicle.vehicle_class}</p>
                </div>
              ))}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
export default Vehicles;
