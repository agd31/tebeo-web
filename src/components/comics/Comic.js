import React, { Component } from 'react';
import ComicService from '../../services/ComicService';
import {Link} from 'react-router-dom'


class Comic extends Component {
  state = {
    comic:null,
  }
  
  handleClick() {
    this.props.history.goBack()
  }
  componentDidMount() {
    ComicService.showComic(this.props.match.params.id)
      .then(
        comic => this.setState({ comic: comic }),
        error => console.error(error)
      )
}
  render() {
    const { comic } = this.state
   if(comic){

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

<div className="container d-flex">
<div className=" colizq">
    <div className="view overlay">
      <img className="card-img" src={comic.imageURL} alt={comic.title} />

      <div className="mask rgba-white-slight" />
    </div>
    </div>
    
    <div className="card-body w-33 card-unpocomargin">
      <h4 className="card-title">{comic.title}</h4>

      <h3 className="card-title">{comic.rating} <i class="fas fa-trophy amber-text"></i></h3>

      <h4 className="card-title">{comic.finished}</h4>

      <h4 className="card-title px-4">
      {comic.tags.map((comic) => (
          <span className="badge badge-pill badge-info">
           {comic}</span>   
        ))}
      </h4>

      <h4 className="card-title">{comic.family}</h4>

      <p className="card-text">{comic.description}</p>

      <a href="#" className="btn btn-warning">
        Favorito
      </a>
      <a href="#" className="btn btn-success">
        Lo tengo
      </a>
      <a href="#" className="btn btn-danger">
        Lo quiero
      </a>
    </div><div>
    <button className="btn btn-primary" onClick={this.handleClick.bind(this)}><i className="fas fa-backward mr-1"></i> Volver</button>
    </div>
    {/* onClick={this.props.history.goBack()} */}
  </div>
);
}else {
  return <p>Cargando...</p>
}
  }
}

export default Comic