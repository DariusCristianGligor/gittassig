import NavBar2 from "./components/navBar";
import React, { Component } from "react";
import Films from "./components/films";
import People from "./components/people";
import Planets from "./components/planets";
import Species from "./components/species";
import Starship from "./components/starship";
import Vehicles from "./components/vehicles";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import "./App.css";
import ThemeContextProvider from "./ThemeContext";
import PersonFilm from "./components/peersonFilm";

class App extends Component {
  state = {
    searchTerm: "",
  };
  setSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
    console.log(this.state.searchTerm);
  };
  render() {
    return (
      <div className="coninaterMain">
        <ThemeContextProvider>
          <NavBar2
            searchTerm={this.state.search}
            setSearchTerm={this.setSearchTerm}
          ></NavBar2>
          <main className="container">
            <Switch>
              <Route path="/not-found" component={NotFound}></Route>
              <Route exact path="/films">
                <Films
                  searchTerm={this.state.searchTerm}
                  setSearchTerm={this.setSearchTerm}
                ></Films>
              </Route>
              <Route path="/films">
                <PersonFilm
                  searchTerm={this.state.searchTerm}
                  setSearchTerm={this.setSearchTerm}
                ></PersonFilm>
              </Route>
              <Route path="/people">
                <People
                  searchTerm={this.state.searchTerm}
                  setSearchTerm={this.setSearchTerm}
                ></People>
              </Route>
              <Route path="/planets">
                <Planets
                  searchTerm={this.state.searchTerm}
                  setSearchTerm={this.setSearchTerm}
                ></Planets>
              </Route>
              <Route path="/species" component={Species}>
                <Species
                  searchTerm={this.state.searchTerm}
                  setSearchTerm={this.setSearchTerm}
                ></Species>
              </Route>
              <Route path="/starship">
                <Starship
                  searchTerm={this.state.searchTerm}
                  setSearchTerm={this.setSearchTerm}
                ></Starship>
              </Route>
              <Route path="/vehicles" component={Vehicles}>
                <Vehicles
                  searchTerm={this.state.searchTerm}
                  setSearchTerm={this.setSearchTerm}
                ></Vehicles>
              </Route>
              <Redirect from="/" exact to="/people" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </ThemeContextProvider>
      </div>
    );
  }
}
export default App;
