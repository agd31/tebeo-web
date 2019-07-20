import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./guards/PrivateRoute.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../node_modules/fontawesome-react/css/all.min.css";
import "./App.css";
// import "maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
// import "maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"
//import "code.jquery.com/jquery-1.11.1.min.js"
import Header from "./components/misc/Header.js";
import Navbar from "./components/misc/Navbar.js";
import Comic from "./components/comics/Comic.js";
import Home from "./components/Home.js";
import Biblioteca from "./components/Biblioteca.js";
import Webcomics from "./components/Webcomics.js";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/Login.js";
import Foro from "./components/Foro.js";
import ComicAm from "./components/comics/ComicAm";
import Searcher from "./components/Searcher.js";
import Prueba from "./components/Prueba.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/comics/americano" component={ComicAm} />
          <Route exact path="/comics/search" component={Searcher} />
          <Route exact path="/comics/:id" component={Comic} />
          <Route exact path="/webcomics" component={Webcomics} />
          {/* <PrivateRoute exact path="/biblioteca" component={Biblioteca} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/foro" component={Foro} />
          <Route exact path="/prueba" component={Prueba} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
