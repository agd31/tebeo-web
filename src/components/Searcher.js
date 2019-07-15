import React, { Component } from "react";
import ComicService from "../services/ComicService";
import SmallComic from "./comics/SmallComic.js";

class Searcher extends Component {
  state = {
    comics: null,
    comic: {
      title: "",
      family: "",
      imageURL: "",
      tag: [],
    },
    errors: {},
    touch: {}
  }; //handleInputChange.bind(this)

  handleInputChange = (event) => {
    console.log(this.state.comic)
    //lo de paco
    this.setState({
      comic: {
        ...this.state.comic,
        [event.target.name]: event.target.value
      }
    }, () => {
      console.log(this.state.comic)
      ComicService.searchComic(this.state.comic) //{tags,family,finished, rating, title}
      .then(comics => {       
        this.setState({ comics });
      })
      .catch(console.log)
    })
    //
  }


  componentDidMount() {
    ComicService.searchComic(this.state.comic)
      .then(comics => {
        
        this.setState({ comics });
      })
      .catch(console.log);
  }
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <form>
        <label>
          Family <br />
          Americano  
          <input
            name="family"
            type="checkbox"
            value="Americano"
            checked={this.state.family}
            onChange={this.handleInputChange} />
        </label>
        <br />
        
      </form>
        
        <div className="searchercillo d-flex flex-row flex-wrap">
          {this.state.comics === null && <div>Loading...</div>}
          {this.state.comics &&
            this.state.comics.map((comic, i) => (
              <div className='w-33'>
           <SmallComic comic={comic} key={i}/>
          </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Searcher;
