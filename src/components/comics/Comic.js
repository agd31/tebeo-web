import React, { Component } from "react";
import ComicService from "../../services/ComicService";
import AuthService from "../../services/AuthService";
import { withAuthContext } from "../../contexts/AuthStore";

class Comic extends Component {
  state = {
    comic: null
  };

  handleClick() {
    this.props.history.goBack();
  }
  handleFavs = () => {
    AuthService.addFav(this.props.match.params.id).then(
      user => this.props.onUserChange(user),
      error => console.error(error)
    );
  };
  handleWish=() =>{
    AuthService.addWish(this.props.match.params.id).then(
      user => this.props.onUserChange(user),
      error => console.error(error)
    );
  }
  handleOwned=() =>{
    AuthService.addHave(this.props.match.params.id).then(
      user => this.props.onUserChange(user),
      error => console.error(error)
    );
  }

  componentDidMount() {
    AuthService.getUser().then(user => this.props.onUserChange(user));
    ComicService.showComic(this.props.match.params.id).then(
      comic => this.setState({ comic: comic }),
      error => console.error(error)
    );
  }
  render() {
    const { user } = this.props;
    console.log(user.favs);
    const { comic } = this.state;
    let myComic;
    if (comic) {
      myComic = user.favs.filter(item => {
        return item === comic._id;
      });
      console.log(myComic);
    }

    let myComicHave;
    if (comic) {
      myComicHave = user.have.filter(item => {
        return item === comic._id;
      });
      console.log(myComicHave);
    }

    let myComicWish;
    if (comic) {
      myComicWish = user.wish.filter(item => {
        return item === comic._id;
      });
      console.log(myComicWish);
    }

    if (comic) {
      return (
        <div>
          <div className="comiccontainer">
            <div className="">
              <img
                className="comicimage"
                src={comic.imageURL}
                alt={comic.title}
              />
            </div>

            <div className="comicficha">
              <div id="rojito">
                <div>
                  <h4 className="tituloficha">{comic.title}</h4>
                </div>
                <div>
                  {myComic[0] && (
                    <img
                      src="https://i.imgur.com/BXle2md.png"
                      className="estrellitafav"
                      onClick={this.handleFavs}
                    />
                  )}
                  {!myComic[0] && (
                    <img
                      src="https://i.imgur.com/tg5tM4i.png"
                      className="estrellitafav"
                      onClick={this.handleFavs}
                    />
                  )}
                </div>
              </div>
              <div id="grisaceo1">
                <h4 className=" ">
                  {comic.tags.map(comic => (
                    <span className="letrarojo ">{comic} |</span>
                  ))}
                </h4>
                <div id="grisaceo2">
                  <div id="grisizquierda">
                    <h4 className="">Tipo de cómic: {comic.family}</h4>
                    <h6 className="">
                      Estado: {comic.finished && "Terminado"}
                      {!comic.finished && "En producción"}
                    </h6>
                    <h6 className="">{comic.amateur && "Amateur"}</h6>

                    <p className="descripcionComic">{comic.description}</p>
                  </div>
                  <div id="grisderecha">
                    <h3 className="letrarating">
                      {comic.rating}{" "}
                      <img
                        src="https://i.imgur.com/Z5pNVJj.png"
                        className="imagerating"
                      />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comiccontainer">
            <div className="">
              <a href={comic.buyURL} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://www.niftybuttons.com/amazon/amazon-button1.png"
                  className="imageAmazon"
                />
              </a>
            </div>
            <div className="">
              <button className="btn amarillo" onClick={this.handleWish}>
                {myComicWish[0] && "No quiero"}
                {!myComicWish[0] && "Lo quiero"}
              </button>
              <button className="btn rojo" onClick={this.handleOwned}>
                {myComicHave[0] && "Sacar de biblioteca"}
                {!myComicHave[0] && "Añadir a biblioteca"}
              </button>
            </div>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.handleClick.bind(this)}
            >
              <i className="fas fa-backward mr-1"  /> Volver
            </button>
          </div>
        </div>
      );
    } else {
      return <p>Cargando...</p>;
    }
  }
}

export default withAuthContext(Comic);
