import React, { Component } from "react";
import { BrowserRouter as Router, Route as Ruta, Link } from "react-router-dom";
import Contacto from "./Contacto";
import Inicio from "./Inicio";
import Productos from "./Productos";
import Footer from "./Footer";
import Equipos from "./Equipos";
import Galeria from "./Galeria";
import Admin from "./Admin";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div>
        <Router>
          <Ruta exact path="/" component={Inicio} />
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <i className="fa fa-chevron-down fa-2x"></i>
                  </button>
                </h2>
              </div>

              <div className="collapse" id="collapseOne">
                <div className="card-body">
                  <div className="container scrollflow -slide-top -opacity carDim">
                    <div className="row justify-content-center">
                      <div className="carder badge badge-dark m-2 col-lg-3 col-md-3 col-12">
                        <br />
                        <br />
                        <br />
                        <b />
                        <span>
                          <Link className="nav-link" to="/servicios">
                            <span>G A L E R I A</span>
                          </Link>
                          <br />
                          <br />
                          <b />
                          <b />
                        </span>
                      </div>
                      <div
                        id="fontCardHouver"
                        className="carder badge badge-dark m-2 col-lg-3 col-md-3 col-12"
                      >
                        <br />
                        <br />
                        <br />
                        <span>
                          <Link
                            id="fontCardHouver"
                            className="nav-link"
                            to="/productos"
                          >
                            <span>P R O D U C T O S</span>
                          </Link>
                        </span>
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                      <div
                        id="fontCardHouver"
                        className="carder badge badge-dark m-2 col-lg-3 col-md-3 col-12"
                      >
                        <br />
                        <br />
                        <br />
                        <span>
                          <Link
                            id="fontCardHouver"
                            className="nav-link"
                            to="/equipos"
                          >
                            <span>H E R R A M I E N T A S</span>
                          </Link>
                        </span>
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                      <div
                        id="fontCardHouver"
                        className="carder badge badge-dark m-2 col-lg-3 col-md-3 col-12"
                      >
                        <br />
                        <br />
                        <br />
                        <span>
                          <Link id="fontCardHouver" className="nav-link" to="/">
                            <span>
                              <i className="fa fa-home fa-2x"></i>
                            </span>
                          </Link>
                        </span>
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>

                      <br />
                      <div
                        id="fontCardHouver"
                        className="carder badge badge-dark m-2 col-lg-3 col-md-3 col-12"
                      >
                        <br />
                        <br />
                        <br />
                        <span>
                          <Link
                            id="fontCardHouver"
                            className="nav-link"
                            to="/admin"
                          >
                            <span>A D M I N</span>
                          </Link>
                        </span>
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                      <div
                        id="fontCardHouver"
                        className="carder badge badge-dark m-2 col-lg-3 col-md-3 col-12"
                      >
                        <br />
                        <br />
                        <br />
                        <span>
                          <Link
                            id="fontCardHouver"
                            className="nav-link"
                            to="/contact"
                          >
                            <span>
                              <i
                                id="fontCardHouver"
                                className="fa fa-phone fa-2y fa-2x"
                              ></i>
                            </span>
                          </Link>
                        </span>
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Ruta path="/contact" component={Contacto} />
          <Ruta path="/servicios" component={Galeria} />
          <Ruta path="/productos" component={Productos} />
          <Ruta path="/equipos" component={Equipos} />
          <Ruta path="/admin" component={Admin} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Card;
