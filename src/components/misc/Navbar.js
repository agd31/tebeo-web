import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import authService from "../../services/AuthService.js";
import { withAuthContext } from "../../contexts/AuthStore";
import "../../images/oh-comic.png"

class Navbar extends Component {
  state = {
    Redirection: false
  };
  handleLogout = () => {
    authService
      .logout() //if redirect state=true
      .then(res => {
        this.setState({ Redirection: true });
        this.props.onUserChange(null);
      });
  };

  componentDidMount() {
    authService
      .getUser()
      .then(
        user => this.setState({ user: { ...this.state.user, ...user } }),
        error => console.error(error)
      );
  }

  render() {
    const { Redirection } = this.state;

    const isAuthenticated = this.props.isAuthenticated();

    return (
      <nav className="navbar navbar-expand-lg navbar-light navbarmod">
        {Redirection && <Redirect to="/" />}
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="https://i.imgur.com/559xfPu.png" className="logo"/>
          </NavLink>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto d-flex flex-row">
              <li className="nav-item">
                <NavLink className="nav-link" to="/comics/americano">
                  AMERICANO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/comics/Europeo">
                  EUROPEO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/comics/Manga">
                  MANGA
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/comics/Amateur">
                  AMATEUR
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/webcomics">
                  WEBCOMIC
                </NavLink>
              </li>
              {isAuthenticated && <li className="divider-vertical" />}
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/foro">
                    FORO
                  </NavLink>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/biblioteca">
                    BIBLIOTECA
                  </NavLink>
                </li>
              )}
              </ul>
              <div className="registerUser align-self-end">
              <ul className="navbar-nav mr-auto d-flex flex-row">
                {!isAuthenticated && (
                  <li className="nav-item">
                    <NavLink className="nav-link registerLeft" to="/register">
                      Registro
                    </NavLink>
                  </li>
                )}
                {!isAuthenticated && (
                  <li className="nav-item">
                    <NavLink className="nav-link registerLeft" to="/login">
                      Login
                    </NavLink>
                  </li>
                )}

                {isAuthenticated && (
                  <li className="nav-item">
                    <NavLink
                      className="nav-link registerLeft"
                      to="/profile"
                      title="Usuario"
                    >
                      {this.props.user.name && this.props.user.name}
                      {!this.props.user.name && this.props.user.email}
                    </NavLink>
                  </li>
                )}
                {isAuthenticated && (
                  <li className="nav-item">
                    <NavLink
                      className="nav-link registerLeft"
                      to="/"
                      title="Logout"
                      onClick={this.handleLogout}
                    >
                      <i className="fas fa-sign-out-alt fa-lg" />
                    </NavLink>
                  </li>
                )}
                </ul>
              </div>
            
          </div>
        </div>
      </nav>
    );
  }
}

export default withAuthContext(Navbar);

//fixed-top
