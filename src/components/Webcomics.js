import React, { Component } from "react";

class Webcomics extends Component {
  render() {
    return (
      <div className="w-75 card-margen10 centerwebcomic">
        <div className="w-75 card text-white bg-info mb-3 webcomicfondo">
          <div className="card-header">Atomic Robo</div>
          <div className="card-body">
            <a href="http://www.atomic-robo.com/" target="_blank">
              <img
                className="card-img"
                src="https://i.imgur.com/mxdiXXY.png"
                alt="Atomic Robo"
              />
            </a>
            <p className="card-text text-white webcomicp">
              Un genial ejemplo de Dieselpunk con fantasía, noir, acción,
              misterio, etc. Antes había que pagar para conseguir este cómic.
              Hoy en día podemos leerlo gratis gracias a que han cambiado su
              modelo de negocios. Ahora se financian con Patreon y algo de
              publicidad.
            </p>
          </div>
        </div>

        <div className="w-75 card-margen10">
          <div className=" card text-white bg-info mb-3 webcomicfondo">
            <div className="card-header">Gone with the Blastwave</div>
            <div className="card-body">
              <a href="http://www.blastwave-comic.com/" target="_blank">
                <img
                  className="card-img"
                  src="https://i.imgur.com/SFoziLS.png"
                  alt="Gone with the Blastwave"
                />
              </a>
              <p className="card-text text-white webcomicp">
                Un mundo post-apocalíptico y una guerra que recuerda demasiado a
                un videojuego. Pero la historia es más una comedia que un drama.
                Últimamente se está actualizando con regularidad, pero en el
                pasado iba y venía.
              </p>
            </div>
          </div>
        </div>
        <div className="w-75 card-margen10">
          <div className=" card text-white bg-info mb-3 webcomicfondo">
            <div className="card-header">Cyanide and Happiness</div>
            <div className="card-body">
              <a href="http://explosm.net/" target="_blank">
                <img
                  className="card-img"
                  src="https://i.imgur.com/GIyHCVr.png"
                  alt="Cyanide and Happiness"
                />
              </a>
              <p className="card-text text-white webcomicp">
                Con un humor negro terrible y un cinismo incomparable. Cyanide
                and Happiness ha sabido ganarse un rincón en el corazón de la
                Internet. Es seguro que en más de una ocasión has visto alguno
                de sus cómics.
              </p>
            </div>
          </div>
        </div>
        <div className="w-75 card-margen10">
          <div className=" card text-white bg-info mb-3 webcomicfondo">
            <div className="card-header">Dresden Codak</div>
            <div className="card-body">
              <a href="http://dresdencodak.com/" target="_blank">
                <img
                  className="card-img"
                  src="https://i.imgur.com/woir28E.png"
                  alt="Dresden Codak"
                />
              </a>
              <p className="card-text text-white webcomicp">
                Dresden Codak es un webcomic que ha pasado por varias etapas,
                pero todas ellas han sido maravillosas. Lo que Aaron diaz ha
                logrado con este webcómic es asombroso y fascinante. Se trata
                sin duda de un cómic para gente inteligente.
              </p>
            </div>
          </div>
        </div>
        <div className="w-75 card-margen10">
          <div className=" card text-white bg-info mb-3 webcomicfondo">
            <div className="card-header">Girl Genius</div>
            <div className="card-body">
              <a
                href="http://www.girlgeniusonline.com/comic.php"
                target="_blank"
              >
                <img
                  className="card-img"
                  src="https://i.imgur.com/Blly9yN.png"
                  alt="Girl Genius"
                />
              </a>
              <p className="card-text text-white webcomicp">
                Un webcomic que se ha ganado multitud de premios y
                reconocimientos. Si te atrae la estética steampunk en lo más
                mínimo, no puedes dejar de darle un ojo.
              </p>
            </div>
          </div>
        </div>
        <div className="w-75 card-margen10">
          <div className=" card text-white bg-info mb-3 webcomicfondo">
            <div className="card-header">JagoDibuja</div>
            <div className="card-body">
              <a href="http://www.jagodibuja.com/" target="_blank">
                <img
                  className="card-img"
                  src="https://i.imgur.com/rxrUkVn.png"
                  alt="JagoDibuja"
                />
              </a>
              <p className="card-text text-white webcomicp">
                Mejor conocido por su webcomic “Living with Hipstergirl y
                Gamergirl,” Jago ha sabido extender su fama para convertir su
                sitio web en el centro de muchos diferentes y buenos cómics. Si
                bien es difícil superar la fama que ha ganado el cómic original,
                no dejen de darle un ojo a los otros.
              </p>
            </div>
          </div>
        </div>
        <div className="w-75 card-margen10">
          <div className=" card text-white bg-info mb-3 webcomicfondo">
            <div className="card-header">Saturday Morning Breakfast Cereal</div>
            <div className="card-body">
              <a href="https://www.smbc-comics.com/" target="_blank">
                <img
                  className="card-img"
                  src="https://i.imgur.com/yfijZsi.png"
                  alt="Saturday Morning Breakfast Cereal"
                />
              </a>
              <p className="card-text text-white webcomicp">
                Está lleno de ideas geniales, preguntas desafiantes, y conceptos
                fascinantes. Y todo ello dentro de una absoluta comedia.
                Últimamente (desde la victoria de Trump) se centra mucho en
                política, pero sigue siendo fantástico.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Webcomics;
