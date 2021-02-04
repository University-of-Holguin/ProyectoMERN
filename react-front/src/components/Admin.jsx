import React, { Component } from "react";
import { BrowserRouter as Router, Route as Ruta, Link } from "react-router-dom";
import Funcionario from "./admin/Funcionario";
import Galeria from "./admin/Galeria";
import "./Admin.css";
import Ventas from "./admin/Venta";


const Admin = () => {
  return (
      <section className="bg-admin p-3">
        <Router>
          <div className="container">
            <div className="row">
              <nav className="navAdmin navbar navbar-expand-lg navbar-light shadow-lg">
                <div className="container">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <Link
                          className="nav-link"
                          to={"/registrar-funcionario"}
                        >
                          <i className="color-fa fa fa-users"></i>
                          <span className="fontNav"> Funcionarios </span>
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to={"/ventas"}>
                          <i className="color-fa fa fa-file-text"></i>
                          <span className="fontNav"> Ventas</span>
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to={"/galeria"}>
                          <i className="color-fa fa fa-meh-o"></i>
                          <span className="fontNav"> Galeria</span>
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href={"/signin"}>
                          <i className="color-fa fa fa-cart-arrow-down"></i>
                          <span className="fontNav"> Productos</span>
                        </a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href={"/signin"}>
                          <i className="color-fa fa fa-wrench"></i>
                          <span className="fontNav"> Materiales</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h1 className="h1">ADMINISTRACIÓN</h1>
              </nav>

              <nav className=" navbar-light">
                <div className="container col-md-6 col-lg-6  p-3">
                  <form action="">
                    <input
                      type="text"
                      className="inp form-control search"
                      placeholder="Search"
                    />
                    <button className="btn px-4 btn-form1">
                      <i className="color-fa fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <Ruta path="/registrar-funcionario" component={Funcionario} />
          <Ruta path="/ventas" component={Ventas} />
          <Ruta path="/galeria" component={Galeria} />
        </Router>
      </section>
    
  );
};

export default Admin;
