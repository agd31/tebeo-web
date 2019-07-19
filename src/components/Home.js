import React, { Component } from "react";
import ComicList from "../components/comics/ComicList.js";
import ComicService from "../services/ComicService.js";

class Home extends Component {
  state = {
    comics: null,
    filteredComics: null,
    filters: {
      family: [],
      tags: []
    },
    errors: {},
    touch: {}
  };
  searchbar = () => {
    ComicService.searchComic(this.state)
      .then(comics => {
        this.setState({ comics: comics, filteredComics: comics });
      })
      .catch(error => console.error(error));
  };
  render() {
    return (
      <div className="container d-flex">
        <div className="w-75 colizq">
          <ComicList />
        </div>
        <div className="colder">
          <div className="colder-peq">
            <input
              class="form-control"
              type="text"
              placeholder="Search"
              onKeyUp="searchbar()"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
