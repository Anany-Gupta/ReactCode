
import React from "react";
import Filter from "./Filter.jsx";
import Navbar from "./Navbar.jsx";
import Search from "./Search.jsx";
import Table from "./Table.jsx";
import Login from "./Login.jsx";
import Rentals from "./Rentals.jsx";
import Customers from "./Customers.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
  state = {
    movies: [],
    genre: [],
    selectedFilter: "All Genre",
    currentCount: 0,
    search: "",

  };
  componentDidMount() {
    // import data here as it works first and only time when the compenent in introduced to browser.
    let f = async () => {
      let resresponseMovies = await fetch("http://localhost:4000/movies");
      let resresponseGenre = await fetch("http://localhost:4000/genre");

      let moviesJ = await resresponseMovies.json();
      let genreJ = await resresponseGenre.json();
      this.setState({
        movies: moviesJ,
        genre: genreJ,
        currentCount: moviesJ.length,
      })
    };
    f();

  }
  updateSearch = (searchString) => {
    this.setState({ search: searchString });
  }
  toggleLike = (id) => {
    let index = this.state.movies.findIndex((el) => {
      return el._id === id;
    });

    let currMoviesArr = this.state.movies.map((el) => el);

    if (currMoviesArr[index].liked) {
      currMoviesArr[index].liked = false;
    } else {
      currMoviesArr[index].liked = true;
    }

    this.setState({ movies: currMoviesArr });
  };
  setFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  }

  deleteMovie = (MovieName) => {
    let currentMovies = this.state.movies;
    let newM = currentMovies.filter((element) => {
      return element.title !== MovieName;

    });
    let newC = this.state.currentCount - 1;
    this.setState({
      movies: newM,
      currentCount: newC,
    });
    // console.log(this.state.movies);
  }

  render() {
    return (
      <Router>


        <div>
          <Navbar />

          <Switch>
            <Route exact path="/">

              <div className="row">
                <Filter setFilter={this.setFilter} currentFilter={this.state.selectedFilter} genreData={this.state.genre} />
                <div className="col-9 mt-5">
                  <Search search={this.state.search} updateSearch={this.updateSearch} count={this.state.currentCount} />
                  <Table search={this.state.search} toggleLike={this.toggleLike} deleteMovie={this.deleteMovie} currentFilter={this.state.selectedFilter} moviesData={this.state.movies} />
                </div>

              </div>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/rentals">
              <Rentals />
            </Route>
            <Route exact path="/customers">
              <Customers />
            </Route>
          </Switch>

        </div>
      </Router>
    );
  }


}

export default App