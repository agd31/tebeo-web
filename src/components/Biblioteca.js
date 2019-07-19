import React, { Component } from "react";
import ComicList from "./comics/ComicList.js";

class Biblioteca extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex">
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
        </div>
      </div>
    );
  }
}

export default Biblioteca;
