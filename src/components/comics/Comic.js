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
    const isAuthenticated = this.props.isAuthenticated();
    const { comic } = this.state;
    let myComic={};
    let myComicHave={};
    let myComicWish={};
    if(isAuthenticated){const { user } = this.props;
    
    console.log(user.favs);
    
    
    if (comic) {
      myComic = user.favs.filter(item => {
        return item === comic._id;
      });
      console.log(myComic);
    }

    
    if (comic) {
      myComicHave = user.have.filter(item => {
        return item === comic._id;
      });
      console.log(myComicHave);
    }

    
    if (comic) {
      myComicWish = user.wish.filter(item => {
        return item === comic._id;
      });
      console.log(myComicWish);
    }}

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
                {isAuthenticated && (<div>
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
                </div>)}
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
                  src="data:image/jpeg;base64,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"
                  className="imageAmazon"
                />
              </a>
            </div>
            {isAuthenticated && (<div className="">
              <button className="btn amarillo" onClick={this.handleWish}>
                {myComicWish[0] && "No quiero"}
                {!myComicWish[0] && "Lo quiero"}
              </button>
              <button className="btn rojo" onClick={this.handleOwned}>
                {myComicHave[0] && "Sacar de biblioteca"}
                {!myComicHave[0] && "Añadir a biblioteca"}
              </button>
            </div>)}
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
