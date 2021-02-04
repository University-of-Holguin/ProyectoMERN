import React, { Component } from "react";
import "./NavBar.css";
class NavBar extends Component {
  render() {
    return (
      <nav className="bg-nav navbar navbar-expand-lg navbar-light">
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
          <span className="spn">
            LA<i className="fa fa-paint-brush fa-2x"></i>HERMOSA
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href={"/signin"}>
                  <span className="fontnav">S I G N I N</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href={"/signup"}>
                  <span className="fontnav">S I G N U P</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
