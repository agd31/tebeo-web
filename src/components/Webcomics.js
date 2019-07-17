import React, { Component } from 'react';


class Webcomics extends Component {
  render() {
    return (
      <div className="w-75 card-margen10">
        <div className="w-75 card text-white bg-info mb-3">
          <div className="card-header">Titulo</div>
          <div className="card-body">
            <img
              className="card-img"
              src="https://i.imgur.com/JwMUp1c.jpg"
              alt="Alt"
            />
            <p className="card-text text-white">
              Some quick example text to build on the panel title and make up
              the bulk of the panel's content.
            </p>
          </div>
        </div>
      
      <div className="w-75 card-margen10">
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">Titulo</div>
        <div className="card-body">
          <img
            className="card-img"
            src="https://i.imgur.com/MyGl6FE.jpg"
            alt="Alt"
          />
          <p className="card-text text-white">
            Some quick example text to build on the panel title and make up
            the bulk of the panel's content.
          </p>
        </div>
      </div>
    </div>
    <div className="w-75 card-margen10">
    <div className="card text-white bg-danger mb-3">
      <div className="card-header">Titulo</div>
      <div className="card-body">
        <img
          className="card-img"
          src="https://i.imgur.com/6TlB7YF.jpg"
          alt="Alt"
        />
        <p className="card-text text-white">
          Some quick example text to build on the panel title and make up
          the bulk of the panel's content.
        </p>
      </div>
    </div>
  </div>
  </div>
    );
  }
}

export default Webcomics