import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import authService from '../../services/AuthService.js';
import { withAuthContext } from '../../contexts/AuthStore';


 class Navbar extends Component {
  constructor(props){
    super(props);
this.state = {
  Redirection:false
}
  }
 handleLogout = () => {
  authService.logout() //if redirect state=true
    .then(res =>this.setState({ Redirection:  true}))
  
}
render() {
  const { Redirection } =  this.state;
  if (Redirection) {
    return (<Redirect to="/" />)
  }

  const {isAuthenticated}=this.props;

  
  return (
    

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <NavLink className="navbar-brand" to="/">Oh-comic!</NavLink>
     

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

          {isAuthenticated && (
          <li className="nav-item">
            <NavLink className="nav-link registerLeft" to="/register">Registro</NavLink>
          </li>
          )}
          {isAuthenticated && (
          <li className="nav-item">
            <NavLink className="nav-link registerLeft" to="/login">Login</NavLink>
          </li>
          )}
          
          {!isAuthenticated &&(
          <li className="nav-item">
            <NavLink className="nav-link registerLeft" to="/" title="Logout" onClick={this.handleLogout}><i className="fas fa-sign-out-alt fa-lg"></i></NavLink>
          </li>
          )}
          </div>
        </ul>
      </div>
    </div>
</nav>
    );
  }
}

export default withAuthContext(Navbar)