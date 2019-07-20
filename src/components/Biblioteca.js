import React, { Component } from "react";
import ComicList from "./comics/ComicList.js";
import SmallComic2 from "./comics/SmallComic2.js";
import ComicService from "../services/ComicService";
import AuthService from "../services/AuthService";
import { withAuthContext } from "../contexts/AuthStore";



class Biblioteca extends Component {
  state = {
    comics: [],
    cat:"favs",
    errors: {},
    touch: {}
  };
  handleClick(cat) {
    this.setState({ cat })
  }
  componentDidMount() {
    AuthService.getUser()
    .then(user => this.props.onUserChange(user));
    ComicService.list()
    .then(comics => this.setState({ comics }));
  }
  render() {
    const { user } = this.props;
    const { comics, cat } = this.state;
    
    let comicFav;
    if (comics.length) {
      comicFav = comics.filter(item => {
        return user[cat].includes(item._id)
      });
    }
    return (
      
<div className="containerbiblioteca">
  <div>
  <button className="btn amarillo" onClick={() => this.handleClick("favs")}>Favoritos</button>
  <button className="btn btn-info" onClick={() => this.handleClick("have")}>Tengo</button>
  <button className="btn rojo" onClick={() => this.handleClick("wish")}>Quiero</button>
  </div>
        <div className="elementos" >
          {comicFav && comicFav.map((comic, i) => (
            <SmallComic2 comic={comic} key={i} />
          ))}
        </div>
      </div>
      
    );
  }
}

export default withAuthContext(Biblioteca);


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
