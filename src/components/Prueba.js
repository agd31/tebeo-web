import React, { Component } from 'react';
import SmallComic from './comics/SmallComic';
import ComicService from '../services/ComicService.js';
import authService from '../services/AuthService.js'

class Prueba extends Component {
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
const user = authService.getUser()  
ComicService.searchComic(user.favs ===true)
  .then(comics=>this.setState({comics}))
}
render() {
  return (
    <div  className=" d-flex flex-row flex-wrap ">
    
      {this.state.comics.map((comic, i) => (
        <div className='w-33'>
         <SmallComic comic={comic} key={i}/>
        </div>
      ))}
   
    </div>
  )
}

}

export default Prueba