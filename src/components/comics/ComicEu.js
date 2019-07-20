import React, { Component } from "react";
import ComicService from "../../services/ComicService.js";
import SmallComic from "./SmallComic.js"

class ComicEu extends Component {
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
    ComicService.showComicEuropeo().then(comics => this.setState({ comics }));
  }
  render() {
    return (
      <div className="">
        <div className="d-flex flex-row flex-wrap">
          {this.state.comics.map((comic, i) => (
            <SmallComic comic={comic} key={i} />
          ))}
        </div>
      </div>
    );
  }
}
export default ComicEu;
