import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import authService from '../../services/AuthService.js';
import { withAuthContext } from '../../contexts/AuthStore';


 class Navbar extends Component {
  state={
    Redirection:false
  }
 handleLogout = () => {
  authService.logout() //if redirect state=true
    .then(res =>{
      this.setState({Redirection:true})
      this.props.onUserChange(null)
    })
  
}

componentDidMount() {
  authService.getUser()
    .then(
        (user) => this.setState({ user: {...this.state.user, ...user} }),
        (error) => console.error(error)
      )
}

render() {
  const { Redirection } =  this.state;
 

  const isAuthenticated=this.props.isAuthenticated();
  

  
  return (
    
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {Redirection && (<Redirect to="/" />)}
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
          {isAuthenticated &&(
          <li className="nav-item">
            <NavLink className="nav-link" to="/foro">Foro</NavLink>
          </li>
          )}
          {isAuthenticated &&(
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">Biblioteca</NavLink>
          </li>
          )}
          <div className="registerUser">

          {!isAuthenticated && (
          <li className="nav-item">
            <NavLink className="nav-link registerLeft" to="/register">Registro</NavLink>
          </li>
          )}
          {!isAuthenticated && (
          <li className="nav-item">
            <NavLink className="nav-link registerLeft" to="/login">Login</NavLink>
          </li>
          )}
          
          
          {isAuthenticated &&(
          <li className="nav-item">
            <NavLink className="nav-link registerLeft" to="/" title="Usuario" >Nombre</NavLink>
          </li>
          )}
          {isAuthenticated &&(
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