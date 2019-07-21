import React, { Component } from "react";
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
    <div className=" d-flex flex-row  justify-content-around pt-4 biblioteca-ancho">
      <button className="btn  amarillobiblio" onClick={() => this.handleClick("favs")}>Favoritos</button>
      <button className="btn grisbiblio" onClick={() => this.handleClick("have")}>Tengo</button>
      <button className="btn rojobiblio" onClick={() => this.handleClick("wish")}>Quiero</button>
    </div>
    <div className="d-flex flex-row flex-wrap" >
      {comicFav && comicFav.map((comic, i) => (
        <SmallComic2 comic={comic} key={i} />
      ))}
    </div>
  </div>
      
    );
  }
}

export default withAuthContext(Biblioteca);
