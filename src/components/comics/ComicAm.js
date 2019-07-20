import React, { Component } from "react";
import ComicService from "../../services/ComicService";
import SmallComic from "./SmallComic.js";

class ComicAm extends Component {
  state = {
    comics: [],
    comic: {
      title: "",
      family: "",
      imageURL: ""
    },
    errors: {},
    touch: {}
  };
  componentDidMount() {
    ComicService.showComicAmericano().then(comics => this.setState({ comics }));
  }
  render() {
    return (
      <div className="vista">
        <div className="d-flex flex-row flex-wrap">
          {this.state.comics.map((comic, i) => (
            <SmallComic comic={comic} key={i} />
          ))}
        </div>
      </div>
    );
  }
}
export default ComicAm;
