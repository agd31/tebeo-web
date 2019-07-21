import React, { Component } from "react";
import ComicService from "../services/ComicService";
import SmallComic from "./comics/SmallComic.js";

class Prueba extends Component {
  state = {
    comics: null,
    filteredComics: null,
    filters: {
      family: [],
      tags: []
    },
    errors: {},
    touch: {}
  }; //handleInputChange.bind(this)

  // event.target.isCheked
  handleInputChange = event => {
    const { name, checked } = event.target;

    const [filter, value] = name.split(".");

    let newFilter;

    if (this.state.filters[filter] instanceof Array) {
      newFilter = checked
        ? [...this.state.filters[filter], value]
        : this.state.filters[filter].filter(v => v !== value);
    } else {
      newFilter = checked;
    }

    this.setState({
      filters: {
        ...this.state.filters,
        [filter]: newFilter
      }
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    ComicService.searchComic(this.state.filters)
      .then(comics => {
        this.setState({ comics: comics, filteredComics: comics });
      })
      .catch(error => console.error(error));
  };

  componentDidMount() {
    ComicService.searchComic(this.state.comic)
      .then(comics => {
        this.setState({ comics: comics, filteredComics: comics });
      })
      .catch(console.log);
  }
  render() {
    // console.log(this.state);
    return (
      <div>
        <form>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
              <div className="row-4">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                  <label className="form-check-label" for="gridRadios1">First radio</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                  <label className="form-check-label" for="gridRadios2">Second radio</label>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Prueba;


































// import React, { Component } from "react";
// import SmallComic from "./comics/SmallComic";
// import ComicService from "../services/ComicService.js";
// import authService from "../services/AuthService.js";

// class Prueba extends Component {
//   state = {
//     comics: [],
//     comic: {
//       title: "",
//       family: "",
//       imageURL: "",
//       finished: ""
//     },
//     errors: {},
//     touch: {}
//   };
//   componentDidMount() {
//     const user = authService.getUser();
//     ComicService.searchComic(user.favs === true).then(comics =>
//       this.setState({ comics })
//     );
//   }
//   render() {
//     return (
//       <div className=" d-flex flex-row flex-wrap ">
//         {this.state.comics.map((comic, i) => (
//           <div className="w-33">
//             <SmallComic comic={comic} key={i} />
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Prueba;
