import React, { Component } from 'react';
import ComicService from '../../services/ComicService';
import SmallComic from './SmallComic.js'

class ComicList extends Component {
    state = {
      comics: [],
      comic: {
        title: "",
        family: "",
        imageURL:"",
        finished:"",
      },
      errors: {},
      touch: {}
    }
componentDidMount(){
  ComicService.list()
    .then(comics=>this.setState({comics}))
}
render() {
    return (
      <div  className="vista">
      <div>
        {this.state.comics.map((comic, i) => (
          <SmallComic {...comic} key={i}/>
        ))}
      </div>
      </div>
    )
  }

}
export default ComicList