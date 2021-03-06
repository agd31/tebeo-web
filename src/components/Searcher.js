import React, { Component } from "react";
import ComicService from "../services/ComicService";
import SmallComic from "./comics/SmallComic.js";

class Searcher extends Component {
  state = {
    comics: null,
    filteredComics: [],
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
      <div className="d-flex flex-column  ">
        <div className="">
          {/* {JSON.stringify(this.state.filters)} */}
          <form onSubmit={this.handleSubmit} className="mt-5 mx-auto">
          <label className="letragrande mr-5">Géneros </label>
            <div role="checkbox" className="group_checkbox  d-flex flex-row form-check form-check-inline " aria-checked="false" aria-controls="cond1 cond2 cond3" tabindex="0">
              
            
            <ul className="checkboxes list-unstyled d-flex flex-row ml-5 form-check form-check-inline">
              <li>
                <label className="">
                  Americano
                  <input
                    name="family.Americano"
                    type="checkbox"
                    id="cond1"
                    checked={this.state.filters.family.includes("Americano")}
                    onChange={this.handleInputChange}
                    className="ml-2 mr-4 form-check-input"
                    data-toggle="toggle"
                  />
                </label>
                {/* <label  className="btn btn-default">Default <input type="checkbox" id="default" className="badgebox"/><span className="badge">&check;</span></label> */}
              </li>
              <li>
                <label>
                  Manga
                  <input
                    name="family.Manga"
                    type="checkbox"
                    id="cond2"
                    value="Manga"
                    checked={this.state.filters.family.includes("Manga")}
                    onChange={this.handleInputChange}
                    className=" ml-2 mr-4"
                  />
                </label>
              </li>
              <li>
                <label>
                  Europeo
                  <input
                    name="family.Europeo"
                    type="checkbox"
                    id="cond3"
                    value="Europeo"
                    checked={this.state.filters.family.includes("Europeo")}
                    onChange={this.handleInputChange}
                    className=" ml-2 mr-4"
                  />
                </label>
              </li>
            </ul>
            </div>
            <label className="letragrande mr-5">Categorias </label>
            <div role="checkbox" className="group_checkbox d-flex flex-row " aria-checked="false" aria-controls="cond1 cond2 cond3" tabindex="0">
              
            
            <ul className="checkboxes list-unstyled d-flex flex-row flex-wrap ml-5">
              <li>
            
            
            <label >
               Acción
              <input
                name="tags.accion"
                type="checkbox"
                checked={this.state.filters.tags.includes("accion")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Humor
              <input
                name="tags.humor"
                type="checkbox"
                checked={this.state.filters.tags.includes("humor")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Artbook
              <input
                name="tags.artbook"
                type="checkbox"
                checked={this.state.filters.tags.includes("artbook")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Aventura
              <input
                name="tags.aventura"
                type="checkbox"
                checked={this.state.filters.tags.includes("aventura")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Bélico
              <input
                name="tags.belico"
                type="checkbox"
                checked={this.state.filters.tags.includes("belico")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Ciencia Ficción
              <input
                name="tags.ciencia ficcion"
                type="checkbox"
                checked={this.state.filters.tags.includes("ciencia ficcion")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Cotidiano
              <input
                name="tags.cotidiano"
                type="checkbox"
                checked={this.state.filters.tags.includes("cotidiano")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Drama
              <input
                name="tags.drama"
                type="checkbox"
                checked={this.state.filters.tags.includes("drama")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Espada y brujería
              <input
                name="tags.espada y brujeria"
                type="checkbox"
                checked={this.state.filters.tags.includes("espada y brujeria")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Fantasía
              <input
                name="tags.fantasia"
                type="checkbox"
                checked={this.state.filters.tags.includes("fantasia")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Histórico
              <input
                name="tags.historico"
                type="checkbox"
                checked={this.state.filters.tags.includes("historico")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Ciberpunk
              <input
                name="tags.ciberpunk"
                type="checkbox"
                checked={this.state.filters.tags.includes("ciberpunk")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Novela Gráfica
              <input
                name="tags.novela grafica"
                type="checkbox"
                checked={this.state.filters.tags.includes("novela grafica")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Misterio
              <input
                name="tags.misterio"
                type="checkbox"
                checked={this.state.filters.tags.includes("misterio")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Noir
              <input
                name="tags.noir"
                type="checkbox"
                checked={this.state.filters.tags.includes("noir")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Piratas
              <input
                name="tags.piratas"
                type="checkbox"
                checked={this.state.filters.tags.includes("piratas")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Romacen
              <input
                name="tags.romance"
                type="checkbox"
                checked={this.state.filters.tags.includes("romance")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Space Opera
              <input
                name="tags.space opera"
                type="checkbox"
                checked={this.state.filters.tags.includes("space opera")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Steampunk
              <input
                name="tags.steampunk"
                type="checkbox"
                checked={this.state.filters.tags.includes("steampunk")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Superhéroes
              <input
                name="tags.superheroes"
                type="checkbox"
                checked={this.state.filters.tags.includes("superheroes")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Suspense
              <input
                name="tags.suspense"
                type="checkbox"
                checked={this.state.filters.tags.includes("suspense")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Terror
              <input
                name="tags.terror"
                type="checkbox"
                checked={this.state.filters.tags.includes("terror")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li><li>
            <label>
              Zombies
              <input
                name="tags.zombies"
                type="checkbox"
                checked={this.state.filters.tags.includes("zombies")}
                onChange={this.handleInputChange}
                className=" ml-2 mr-4"
              />
            </label></li></ul>
            </div>
            <button type="submit" className="btn rojobiblio">Buscar</button>
          </form>

          <div className="searchercillo d-flex flex-row flex-wrap ">
            {this.state.filteredComics.length<1 && this.state.filters.family.length<1 && this.state.filters.tags.length<1 && <div>Loading...</div>}
            {this.state.filteredComics &&
              this.state.filteredComics.map((comic, i) => (
                <div className="w-33">
                  <SmallComic comic={comic} key={i} />
                </div>
              ))}
            {this.state.filteredComics.length<1 && this.state.filters.tags.length>=1 && (<h1>¿No has encontrado lo que buscabas? Refina tu búsqueda </h1>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Searcher;

// {/* <br />
//           <ul className="checkboxes">
//             <li>
//               <label>
//                 Finalizado
//                 <input
//                   name="finished.true"
//                   type="checkbox"
//                   id="cond1"
//                    checked={this.state.filters.finished===true}
//                   onChange={this.handleInputChange}
//                 />
//               </label>
//             </li>
//             <li>
//               <label>
//                 Sigue editándose
//                 <input
//                   name="finished.false"
//                   type="checkbox"
//                   id="cond1"
//                    checked={this.state.filters.finished===false}
//                   onChange={this.handleInputChange}
//                 />
//               </label>
//             </li>
//           </ul> */}
//           {/* <ul className="checkboxes">
//             <li>
//               <label>
//                 Amateur
//                 <input
//                   name="amateur.true"
//                   type="checkbox"
//                   id="condamateuryes"
//                   checked={(this.state.filters.amateur===true)}
//                   onChange={this.handleInputChange}
//                 />
//               </label>
//             </li>
//             <li>
//               <label>
//                 Profesional
//                 <input
//                   name="amateur.false"
//                   type="checkbox"
//                   id="condamateurno"
//                   checked={(this.state.filters.amateur===false)}
//                   onChange={this.handleInputChange}
//                 />
//               </label>
//             </li>
//           </ul>
//           <label>
//             Rating
//             <select value={this.state.value}>
//               <option value="0">Todos</option>
//               <option value="3">3</option>
//               <option value="3.5">3.5</option>
//               <option value="4">4</option>
//               <option value="4.5">4.5</option>
//               <option value="5">5</option>
//             </select>
//           </label> */}

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
