import React from "react";
import { ThemeContext } from "./../ThemeContext";
import { useHistory } from "react-router-dom";
import Like from "./like";
import { Link, NavLink } from "react-router-dom";
const People = ({ searchTerm }) => {
  const history = useHistory();

  const routeChange = (films) => {
    let path = `/films/`;
    films.forEach((element) => {
      path += `${element}?`;
    });
    history.push(path);
  };
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { people, darkMode } = context;
        let c = "";
        if (darkMode === true) c = "AnotherMode";
        return (
          <div>
            {people
              .filter((person) => {
                if (searchTerm == "") {
                  return person;
                } else if (
                  person.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return person;
                }
              })
              .map((person) => (
                <div key={person.url} className={"people" + c}>
                  <p>Name:{person.name}</p>
                  <p>Skin:{person.skin_color}</p>
                  <p>Height:{person.height}</p>
                  <p>Mass:{person.mass}</p>
                  <p>
                    <Like person={person}></Like>
                    <button
                      onClick={() => routeChange(person.films)}
                      className="Button"
                    >
                      Show films
                    </button>
                  </p>
                </div>
              ))}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default People;
