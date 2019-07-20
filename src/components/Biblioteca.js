import React, { Component } from "react";
import ComicList from "./comics/ComicList.js";
import SmallComic from "./comics/SmallComic.js";
import ComicService from "../services/ComicService";
import AuthService from "../services/AuthService";



class Biblioteca extends Component {
  state = {
    comics: [],
    comic: {
      title: "",
      family: "",
      imageURL: ""
    },
    errors: {},
    touch: {}
  };
  componentDidMount() {
    AuthService.getUser()
    .then(user => this.props.onUserChange(user));
    ComicService.list()
    .then(comics => this.setState({ comics }));
  }
  render() {
    const { user } = this.props;
    const { comic } = this.state;
    let comicFav;
    if (comic) {
      comicFav = user.favs.filter(item => {
        return item === comic._id;
      });
    }
    return (
      <div>
<div className="vista">
        <div>
          {this.state.comicFav.map((comic, i) => (
            <SmallComic comic={comic} key={i} />
          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default Biblioteca;


{/* <div className="container d-flex">
          MODIFICAR LOS FAVORITOS CON UN BOTON DEBAJO Y LOS OTROS DOS
          <div className="w-75 colizq">
            <ComicList />
          </div>
        </div>
        <div>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active "
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Favoritos
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link "
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Propiedad
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Lo quiero
              </a>
            </li>
          </ul>
          <div className="tab-content pt-2 pl-1" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              Aquí los favoritos
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              Aquí los que tengo
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              Aquí los que quiero
            </div>
          </div>
        </div> */}
