import React, { Component } from "react";
import ComicList from "../components/comics/ComicList.js";
import ComicService from "../services/ComicService.js";
import SearchBar from "../components/Searchbar.js"

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
      <div>
      <div className="container">
      <div className="w-50 card text-white bg-info mb-3 webcomicfondo">
          <div className="card-header">Atomic Robo</div>
          <div className="card-body d-flex flex-row justify-content-around">
            <a href="http://www.atomic-robo.com/" >
              <img
                className="card-img "
                src="https://images-na.ssl-images-amazon.com/images/I/51pzECqVGCL._SX335_BO1,204,203,200_.jpg"
                alt="Atomic Robo"
              />
            </a>
            <a href="http://www.atomic-robo.com/" >
              <img
                className="card-img "
                src="https://images-na.ssl-images-amazon.com/images/I/51pzECqVGCL._SX335_BO1,204,203,200_.jpg"
                alt="Atomic Robo"
              />
            </a>
            <a href="http://www.atomic-robo.com/" >
              <img
                className="card-img "
                src="https://images-na.ssl-images-amazon.com/images/I/51pzECqVGCL._SX335_BO1,204,203,200_.jpg"
                alt="Atomic Robo"
              />
            </a>
          </div>
        </div>
        <div className="colder">
          <div className="colder-peq">
            <SearchBar/>
          </div>
          <img src="https://s3-us-west-2.amazonaws.com/twc.images/images/banners/4159.gif"className="centerbanner"/>
        </div>
      </div>
      <img src="https://i1.wp.com/dibujarbien.com/wp-content/uploads/2013/02/banner-tutorial-anime-gif-final.gif?w=1080&ssl=1"className="centerbanner2 my-3" /> 
      </div>
    );
  }
}

export default Home;


{/* <div>
      <div className="container d-flex">
        <div className="w-75 colizq">
          <ComicList />
        </div>
        <div className="colder">
          <div className="colder-peq">
            <SearchBar/>
          </div>
          <img src="https://s3-us-west-2.amazonaws.com/twc.images/images/banners/4159.gif"className="centerbanner"/>
        </div>
      </div>
      <img src="https://i1.wp.com/dibujarbien.com/wp-content/uploads/2013/02/banner-tutorial-anime-gif-final.gif?w=1080&ssl=1"className="centerbanner2 my-3" /> 
      </div> */}