import React, { Component } from "react";
import { ThemeContext } from "../ThemeContext";
const PersonFilm = ({ searchTerm }, props) => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { films, darkMode } = context;
        let c = "";
        if (darkMode === true) c = "AnotherMode";
        let filmsUser = window.location.href;
        const movies = filmsUser.split("?");
        console.log(movies);
        return (
          <div>
            {films
              .filter((film) => {
                console.log(movies.indexOf(film.url) !== -1);
                if (movies.indexOf(film.url) !== -1) {
                  if (searchTerm == "") {
                    return film;
                  } else if (
                    film.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return film;
                  }
                }
              })
              .map((film) => (
                <div key={film.url} className={"people" + c}>
                  <p>Title:{film.title}</p>
                  <p>Episode:{film.episode_id}</p>
                  <p>Director:{film.director}</p>
                  <p>Release Date:{film.release_date}</p>
                </div>
              ))}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
export default PersonFilm;
