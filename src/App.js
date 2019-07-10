import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import Header from './components/misc/Header.js';
import Navbar from './components/misc/Navbar.js';
import Comic from './components/comics/Comic.js';
import Home from './components/Home.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';



function App() {
  return (

    <div className="App">
      <Header />
      <Navbar />
      <main className="container">
          <Switch>
            <Route exact path="/"  component={Home}/>
            <Route exact path="/comics/:id" component={Comic} />
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
</main>
 
        
    </div>
  );
}

export default App;
