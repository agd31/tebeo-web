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
    
    const { name, checked } = event.target

    const [filter, value] = name.split(".")

    const newFilter = checked
      ? [...this.state.filters[filter], value]
      : this.state.filters[filter].filter(v => v !== value)

    this.setState({
      filters: {
        ...this.state.filters,
        [filter]: newFilter
      }
    })
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    ComicService.searchComic(this.state.filters)
    .then(comics => {
        
      this.setState({ comics: comics, filteredComics:comics });
    })
    .catch((error)=>console.error(error));
  
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
        {JSON.stringify(this.state.filters)}
        <form onSubmit={this.handleSubmit}>
        <label>
          Family <br />
          Americano  
          <input
            name="family.Americano"
            type="checkbox"
            checked={this.state.filters.family.includes('Americano')}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Manga  
          <input
            name="family.Manga"
            type="checkbox"
            value="Manga"
            checked={this.state.filters.family.includes('Manga')}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Europeo  
          <input
            name="family.Europeo"
            type="checkbox"
            value="Europeo"
            checked={this.state.filters.family.includes('Europeo')}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Tag <br />
          Acción  
          <input
            name="tags.accion"
            type="checkbox"
            checked={this.state.filters.tags.includes('accion')}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Humor  
          <input
            name="tags.humor"
            type="checkbox"
            checked={this.state.filters.tags.includes('humor')}
            onChange={this.handleInputChange} />
        </label>
        <button type="submit">Do the thing</button>
 
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
