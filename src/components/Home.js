import React, { Component } from "react";
import ComicList from "../components/comics/ComicList.js";
import ComicService from "../services/ComicService.js";
import SearchBar from "../components/Searchbar.js";
import { Link } from "react-router-dom";

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
        <div className="container pb-4">
        <div>
          <div className="w-75 card text-white bg-info mb-3 webcomicfondo mx-auto mt-5 heightcard">
            <div className="card-header text-center">TOP POPULARES</div>
            <div className="card-body d-flex flex-row justify-content-around bg-grisaceo ">
              <a href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b7a"
                className="mx-1"
              >
                <img
                  className="card-img "
                  src="https://images-na.ssl-images-amazon.com/images/I/51L2h8EKe4L._SX362_BO1,204,203,200_.jpg"
                  alt="Atomic Robo"
                />
              </a>
              <a
                href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b74"
                className="mx-1"
              >
                <img
                  className="card-img "
                  src="https://images-na.ssl-images-amazon.com/images/I/51MxzXV5B-L._SX353_BO1,204,203,200_.jpg"
                  alt="Atomic Robo"
                />
              </a>
              <a
                href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b65"
                className="mx-1"
              >
                <img
                  className="card-img "
                  src="https://images-na.ssl-images-amazon.com/images/I/51UtAAqHDLL._SX352_BO1,204,203,200_.jpg"
                  alt="Atomic Robo"
                />
              </a>
            </div>
          </div>
          <div className="w-75 card text-white bg-info mb-3 webcomicfondo mx-auto mt-5 heightcard">
            <div className="card-header text-center">TOP VALORADOS</div>
            <div className="card-body d-flex flex-row justify-content-around bg-grisaceo">
              <a
                href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b77"
                className="mx-1"
              >
                <img
                  className="card-img "
                  src="https://images-na.ssl-images-amazon.com/images/I/51oRjO25MTL._SX345_BO1,204,203,200_.jpg"
                  alt="Atomic Robo"
                />
              </a>
              <a
                href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b58"
                className="mx-1"
              >
                <img
                  className="card-img "
                  src="https://images-na.ssl-images-amazon.com/images/I/41DkURvrCaL._SX349_BO1,204,203,200_.jpg"
                  alt="Atomic Robo"
                />
              </a>
              <a
                href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b55"
                className="mx-1"
              >
                <img
                  className="card-img "
                  src="https://images-na.ssl-images-amazon.com/images/I/515G1CajMDL._SX354_BO1,204,203,200_.jpg"
                  alt="Atomic Robo"
                />
              </a>
            </div>
          </div>
          <div className="w-75 card text-white bg-info mb-3 webcomicfondo mx-auto mt-5 heightcard">
            <div className="card-header text-center">TOP NOVEDADES</div>
            <div className="card-body d-flex flex-row justify-content-around bg-grisaceo">
              <a
                href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b7d"
                className="mx-1"
              >
                <img
                  className="card-img "
                  src="https://images-na.ssl-images-amazon.com/images/I/61Lsz0OA0sL._SX380_BO1,204,203,200_.jpg"
                  alt="Atomic Robo"
                />
              </a>
              <a
                href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b71"
                className="mx-1"
              >
                <img
                  className="card-img "
                  src="https://images-na.ssl-images-amazon.com/images/I/51Z7gEHt-7L._SX323_BO1,204,203,200_.jpg"
                  alt="Atomic Robo"
                />
              </a>
              <a
                href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b54"
                className="mx-1"
              >
                <img
                  className="card-img "
                  src="https://images-na.ssl-images-amazon.com/images/I/41wlL2ZOA%2BL._SX373_BO1,204,203,200_.jpg"
                  alt="Atomic Robo"
                />
              </a>
            </div>
          </div>
          </div>  
          <div className="colder alturagris">
            <div className="colder-peq ">
              <SearchBar />
            </div>
            <div className=""><h6 className="centercomichome">Recomendado del mes</h6>
            <a href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b53">
            <img
                  className=" webcomicfondo w-75 centercomichome mb-3"
                  src="https://images-na.ssl-images-amazon.com/images/I/51TQ0IBMEEL._SX373_BO1,204,203,200_.jpg"
                /></a>
            </div>
            <div className="my-5"><h6 className="centercomichome">Recomendado amateur</h6>
            <a href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b71">
            <img
                  className=" webcomicfondo w-75 centercomichome mb-3"
                  src="https://images-na.ssl-images-amazon.com/images/I/51Z7gEHt-7L._SX323_BO1,204,203,200_.jpg"
                /></a>
            </div>
            <div className=""><h6 className="centercomichome">Revelación</h6>
            <a href="http://localhost:3000/comics/5d2df81c5da3d83abcbd9b51">
            <img
                  className=" webcomicfondo w-75 centercomichome mb-3"
                  src="https://images-na.ssl-images-amazon.com/images/I/61BX5qX11bL._SX375_BO1,204,203,200_.jpg"
                /></a>
            </div>
            {/* <img
              src="https://s3-us-west-2.amazonaws.com/twc.images/images/banners/4159.gif"
              className="centerbanner"
            /> */}
          </div>
        </div>
        <img
          src="https://i1.wp.com/dibujarbien.com/wp-content/uploads/2013/02/banner-tutorial-anime-gif-final.gif?w=1080&ssl=1"
          className="centerbanner2 my-3"
        />
      </div>
    );
  }
}

export default Home;

{
  /* <div>
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
      </div> */
}
