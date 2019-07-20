import React from "react";

const Footer = () => (
<div>
  <footer className="page-footer font-small colorfooter px-5 lighten-3 pt-4">
    <div className=" text-center text-md-left">
      <div className="row">
        <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
          <h5 className="font-weight-bold text-uppercase mb-4">Secciones</h5>
          <ul className="list-unstyled">
          <li>
            <p>
              <a href="http://localhost:3000/comics/americano">Americano</a>
            </p>
          </li>
          <li>
            <p>
              <a href="http://localhost:3000/comics/manga">Manga</a>
            </p>
          </li>
          <li>
            <p>
              <a href="http://localhost:3000/comics/europeo">Europeo</a>
            </p>
          </li>
          <li>
            <p>
              <a href="http://localhost:3000/comics/search">Buscador</a>
            </p>
          </li>
        </ul>
        </div>
        <hr className="clearfix w-100 d-md-none"/>
        <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
          <h5 className="font-weight-bold text-uppercase mb-4">AYUDA</h5>
          <ul className="list-unstyled">
          <li>
            <p>
              <a href="#!">Condiciones de uso</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">Ayuda</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">Agenda</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">Blog</a>
            </p>
          </li>
        </ul>
        </div>
        <hr className="clearfix w-100 d-md-none"/>
        <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
        <h5 className="font-weight-bold text-uppercase mb-4">Sobre nosotros</h5>

        <ul className="list-unstyled">
          <li>
            <p>
              <a href="#!">Quiénes somos</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">Dónde estamos</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">Contacto</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">Premios</a>
            </p>
          </li>
        </ul>
        </div>
      

      <hr className="clearfix w-100 d-md-none"/>

      
      <div className="col-md-2 col-lg-2 text-center mx-auto my-4">

       
        <h5 className="font-weight-bold text-uppercase mb-4">Síguenos</h5>

        <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
      <a class="btn-floating btn-fb mx-1" href="https://es-es.facebook.com/theironhack">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-tw mx-1" href="https://twitter.com/ironhackmad">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-envelope mx-1" href="mailto:agd3101@gmail.com">
      <i class="fas fa-envelope"></i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/alvaro-garcia-dominguez">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-github mx-1" href="https://github.com/agd31">
      <i class="fab fa-github"></i>
      </a>
    </li></ul>

      </div>
     

    </div>
    

  </div>
  

  
  <div className="footer-copyright text-center py-3">© 2019 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> Alvaro Productions</a>
  </div>


</footer>
</div>
);

export default Footer;
