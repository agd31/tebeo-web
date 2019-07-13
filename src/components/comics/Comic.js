import React, { Component } from 'react';
import ComicService from '../../services/ComicService';
import {Link} from 'react-router-dom'


class Comic extends Component {
  state = {
    comic:null,
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

return (  <div className="container">
    <img src={comic.imageURL} className="card-img-top" alt={comic.title} />
    <div className="card-body">
      <h5 className="card-title">{comic.title}</h5>
      <p className="card-text">
        {comic.description}
      </p>
    </div>
</div>
   

      
  );
}else {
  return <p>Cargando...</p>
}
  }
}

export default Comic