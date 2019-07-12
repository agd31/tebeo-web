import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import authService from '../../services/AuthService'
import { withAuthContext} from '../../contexts/AuthStore';


const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&‘+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/

const validations = {
  email: (value) => {
    let message;
    if (!value) {
      message = 'Email is required';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'Invalid email pattern';
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = 'Password is required';
    }
    return message;
  }
}

class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
      id:''
     
    },
    errors: {},
    touch: {},
    isAuthenticated: false
  }




  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validations[name] && validations[name](value)
      }
    })
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { user } = this.state
    authService.authenticate(user)
      .then(
        response => {
          //this.props.onUserLogin(response)
          this.setState({ 
            isAuthenticated: true,
            id: user.id
          })
        },
        error => {
          this.setState({
            ...this.state,
            errors: {
              ...this.state.errors,
              name: true,
              password: true
            },
          })
      }
      )
  }



  isValid = () => {
    return !Object.keys(this.state.user)
      .some(attr => this.state.errors[attr])
     
  }

  render() {
    const { isAuthenticated, errors, user, touch, id } =  this.state;
    if (isAuthenticated) {
      return (<Redirect to={`/profile/${id}`}/>)
    }

    return (
      <div className="box mx-auto">
        <div className="row">
          <div className="col-15">
            <h3>Entra en tu cuenta</h3>
            <form id="login-form" className="mt-4" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Aquí tu email</label>
                <input type="email" name="email" className={`form-control ${touch.email && errors.email ? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.email} />
                <div className="invalid-feedback">{errors.email}</div>
              </div>
              <div className="form-group">
                <label>Y aquí la contraseña</label>
                <input type="password" name="password" className={`form-control ${touch.password && errors.password ? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.password} />
                <div className="invalid-feedback">{errors.password}</div>
              </div>

              <p className="mt-4"><small>Si no tienes cuenta crea una <Link to="/register">AQUÍ</Link></small></p>
              <button className="login-button" form="login-form" type="submit" disabled={!this.isValid()}> Login</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default withAuthContext(Login)