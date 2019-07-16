import React, { Component } from "react";
import ComicService from "../services/ComicService";
import SmallComic from "./comics/SmallComic.js";

class Searcher extends Component {
  state = {
    comics: null,
    filteredComics: null,
    filters:{
      family:[],
      tags:[]
    },
    errors: {},
    touch: {}
  }; //handleInputChange.bind(this)


  // event.target.isCheked
  handleInputChange = (event) => {

    // console.log(event.target.value)
    // console.log(this.state.filters[event.target.name])
    
    if(event.target.checked  ){

      this.setState({
        filters:{...this.state.filters,
        [event.target.name]:[...this.state.filters[event.target.name],event.target.value]}
        
      },this.setState(this.state.filteredComics.filter(comic=>{
        console.log(comic[event.target.name].includes(this.state.filters[event.target.name]))
        return comic[event.target.name].includes(this.state.filters[event.target.name])
      })))}

    //   this.setState({
    //     filteredComics: this.state.comics.filter(comic=>comic[event.target.name]===event.target.value)
    //   })
    // }
    // else{
    // this.setState({
    //   filteredComics: this.state.comics.filter(comic=>comic[event.target.name]===event.target.value)
    // })}
  }


  componentDidMount() {
    ComicService.searchComic(this.state.comic)
      .then(comics => {
        
        this.setState({ comics: comics, filteredComics:comics });
      })
      .catch(console.log);
  }
  render() {
    // console.log(this.state);
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
        <label>
          Manga  
          <input
            name="family"
            type="checkbox"
            value="Manga"
            checked={this.state.family}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Europeo  
          <input
            name="family"
            type="checkbox"
            value="Europeo"
            checked={this.state.family}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Tag <br />
          Acción  
          <input
            name="tags"
            type="checkbox"
            value="accion"
            checked={this.state.tags}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Humor  
          <input
            name="tags"
            type="checkbox"
            value="humor"
            checked={this.state.tags}
            onChange={this.handleInputChange} />
        </label>
      </form>
        
        <div className="searchercillo d-flex flex-row flex-wrap">
          {this.state.filteredComics === null && <div>Loading...</div>}
          {this.state.filteredComics &&
            this.state.filteredComics.map((comic, i) => (
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









// class Searcher extends Component {
//   state = {
//     comics: null,
//     comic: {
//       title: "",
//       family: "",
//       imageURL: "",
//       tags: "",
//     },
//     errors: {},
//     touch: {}
//   }; //handleInputChange.bind(this)

//   handleInputChange = (event) => {
//     console.log(this.state.comic)
    
//     this.setState({
//       comic: {
//         ...this.state.comic,
//         [event.target.name]: event.target.value ?  event.target.value : event.target.name=null
//       }
//     }, () => {
//       console.log(this.state.comic)
//       ComicService.searchComic(this.state.comic) //{tags,family,finished, rating, title}
//       .then(comics => {       
//         this.setState({ comics });
//       })
//       .catch(console.log)
//     })
//   }


//   componentDidMount() {
//     ComicService.searchComic(this.state.comic)
//       .then(comics => {
        
//         this.setState({ comics });
//       })
//       .catch(console.log);
//   }
//   render() {
//     console.log(this.state);
//     return (
//       <div className="container">
//         <form>
//         <label>
//           Family <br />
//           Americano  
//           <input
//             name="family"
//             type="checkbox"
//             value="Americano"
//             checked={this.state.family}
//             onChange={this.handleInputChange} />
//         </label>
//         <label>
//           Family <br />
//           Manga  
//           <input
//             name="family"
//             type="checkbox"
//             value="Manga"
//             checked={this.state.family}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Tag <br />
//           Acción  
//           <input
//             name="tags"
//             type="checkbox"
//             value="Accion"
//             checked={this.state.tags}
//             onChange={this.handleInputChange} />
//         </label>
//         <label>
//           Humor  
//           <input
//             name="tags"
//             type="checkbox"
//             value="Humor"
//             checked={this.state.tags}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
        
//         <div className="searchercillo d-flex flex-row flex-wrap">
//           {this.state.comics === null && <div>Loading...</div>}
//           {this.state.comics &&
//             this.state.comics.map((comic, i) => (
//               <div className='w-33'>
//            <SmallComic comic={comic} key={i}/>
//           </div>
//             ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Searcher;
