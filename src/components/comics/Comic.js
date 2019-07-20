import React, { Component } from "react";
import ComicService from "../../services/ComicService";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";

class Comic extends Component {
  state = {
    comic: null
  };

  handleClick() {
    this.props.history.goBack();
  }
  handleFavs() {
    AuthService.addFav(this.props.match.params.id).then(
      user => console.log(user),
      error => console.error(error)
    );
  }
  handleWish() {
    AuthService.addWish(this.props.match.params.id).then(
      user => console.log(user),
      error => console.error(error)
    );
  }
  handleOwned() {
    AuthService.addHave(this.props.match.params.id).then(
      user => console.log(user),
      error => console.error(error)
    );
  }
  componentDidMount() {
    ComicService.showComic(this.props.match.params.id).then(
      comic => this.setState({ comic: comic }),
      error => console.error(error)
    );
  }
  render() {
    const { comic } = this.state;
    if (comic) {
      return (
        /* <div className="container">
    <img src={comic.imageURL} className="card-img-top" alt={comic.title} />
    <div className="card-body">
      <h5 className="card-title">{comic.title}</h5>
      <p className="card-text">
        {comic.description}
      </p>
    </div>
</div> */
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
                <img
                  src="https://i.imgur.com/BXle2md.png"
                  className="estrellitafav"
                  onClick={this.handleFavs()}
                />
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
                  <h4 className="">{comic.finished}</h4>

                  <h4 className="">Tipo de cómic: {comic.family}</h4>

                  <p className="">{comic.description}</p>
                  
                </div>
                <div id="grisderecha">
                    <h3 className="letrarating">
                      {comic.rating} <img src="https://i.imgur.com/Z5pNVJj.png" />
                    </h3>
                  </div>
              </div>
            </div>
            {/* 
            <button className="btn btn-success" onClick={this.handleOwned()}>
              Lo tengo
            </button>
            <button className="btn btn-danger" onClick={this.handleWish()}>
              Lo quiero
            </button>
            <a href={comic.buyURL} target="_blank" rel="noopener noreferrer">
              <img src="https://www.niftybuttons.com/amazon/amazon-button1.png" />
            </a> */}
          </div>
          </div>
          <div id="botones">
          <a href={comic.buyURL} target="_blank" rel="noopener noreferrer">
              <img src="https://www.niftybuttons.com/amazon/amazon-button1.png" />
            </a>
            
            <button className="btn amarillo" onClick={this.handleWish()}>
              Lo quiero
            </button>  
            <button className="btn rojo" onClick={this.handleOwned()}>
              Añadir a la biblioteca
            </button>
          </div>
          
        </div>
      );
    } else {
      return <p>Cargando...</p>;
    }
  }
}

export default Comic;

{
  /* <div className="container d-flex">
          <div className=" colizq">
            <div className="view overlay">
              <img
                className="card-img"
                src={comic.imageURL}
                alt={comic.title}
              />

              <div className="mask rgba-white-slight" />
            </div>
          </div>

          <div className="card-body w-33 card-unpocomargin">
            <h4 className="card-title">{comic.title}</h4>

            <h3 className="card-title">
              {comic.rating} <i class="fas fa-trophy amber-text" />
            </h3>

            <h4 className="card-title">{comic.finished}</h4>

            <h4 className="card-title px-4">
              {comic.tags.map(comic => (
                <span className="badge badge-pill badge-info">{comic}</span>
              ))}
            </h4>

            <h4 className="card-title">{comic.family}</h4>

            <p className="card-text">{comic.description}</p>

            <button className="btn btn-warning" onClick={this.handleFavs()}>
              Favorito
            </button>
            <button className="btn btn-success" onClick={this.handleOwned()}>
              Lo tengo
            </button>
            <button className="btn btn-danger" onClick={this.handleWish()}>
              Lo quiero
            </button>
            <a href={comic.buyURL} target="_blank" rel="noopener noreferrer">
              <img src="https://www.niftybuttons.com/amazon/amazon-button1.png" />
            </a>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.handleClick.bind(this)}
            >
              <i className="fas fa-backward mr-1" /> Volver
            </button>
          </div>
           onClick={this.props.history.goBack()} 
        </div> */
}
