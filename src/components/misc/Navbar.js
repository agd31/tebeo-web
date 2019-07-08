import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <NavLink className="navbar-brand" to="/">Oh-comic!</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/comics/americano">Americano</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/comics/Europeo">Europeo</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/comics/Manga">Manga</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/comics/Amateur">Amateur</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">Webcomic</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">Foro</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">Biblioteca</NavLink>
          </li>
          <div className="registerUser">
          <li className="nav-item">
            <NavLink className="nav-link registerLeft" to="/about">Registro</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link registerLeft" to="/about">Inicio</NavLink>
          </li>
          </div>
        </ul>
      </div>
    </div>
</nav>
);

export default Navbar