import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, PrivateRoute  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/fontawesome-react/css/all.min.css';
import './App.css';
import Header from './components/misc/Header.js';
import Navbar from './components/misc/Navbar.js';
import Comic from './components/comics/Comic.js';
import Home from './components/Home.js';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import Foro from './components/Foro.js';
import ComicAm from './components/comics/ComicAm';




function App() {
  return (

    <div className="App">
      <Header />
      <Navbar />
      <main className="container">
          <Switch>
            <Route exact path="/"  component={Home}/>
            <Route exact path="/comics/americano" component={ComicAm}/>
            <Route exact path="/comics/:id" component={Comic} />
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/foro" component={Foro}/>
            
          </Switch>
</main>
 
        
    </div>
  );
}

export default App;
