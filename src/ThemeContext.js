import axios from "axios";
import React, { createContext } from "react";
export const ThemeContext = createContext();
class ThemeContextProvider extends React.Component {
  state = {
    people: [],
    starships: [],
    vehicles: [],
    species: [],
    planets: [],
    films: [],
    darkMode: false,
    count: 0,
  };
  handleLike = (person) => {
    console.log(person);
    let count = this.state.count;
    if (person.isLiked === true) count--;
    else count++;
    this.setState({ count });
    const people = [...this.state.people];
    const index = this.state.people.indexOf(person);
    people[index] = { ...people[index] };
    people[index].isLiked = !people[index].isLiked;
    console.log(people);
    this.setState({ people });
    console.log(count);
  };
  handleAnotherMode = () => {
    let darkMode = !this.state.darkMode;
    this.setState({ darkMode });
  };
  handleCount = () => {
    let count = this.state.count + 1;
    this.setState({ count });
  };
  async componentDidMount() {
    const res = await axios.get(`https://swapi.dev/api/people`).then((res) => {
      const people1 = res.data;
      let isLiked = false;
      const people2 = [];
      people1.results.forEach((element) => {
        people2.push({ ...element, isLiked });
      });
      this.setState({ people: people2 });
    });
    const starship = await axios
      .get(`https://swapi.dev/api/starships/`)
      .then((starship) => {
        const starships1 = starship.data;
        const starships22 = starships1.results;
        this.setState({ starships: starships22 });
        console.log("strashipsssssss", this.state.starships);
      });
    const vehicles = await axios
      .get(`https://swapi.dev/api/vehicles/`)
      .then((veh) => {
        const vehicles = veh.data.results;
        this.setState({ vehicles });
      });
    const species = await axios
      .get(`https://swapi.dev/api/species/`)
      .then((veh) => {
        const species = veh.data.results;
        this.setState({ species });
      });
    const planets = await axios
      .get(`https://swapi.dev/api/planets/`)
      .then((veh) => {
        const planets = veh.data.results;
        this.setState({ planets });
      });
    const films = await axios
      .get(`https://swapi.dev/api/films/`)
      .then((veh) => {
        const films = veh.data.results;
        this.setState({ films });
      });
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          handleAnotherMode: this.handleAnotherMode,
          handleLike: this.handleLike,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
