import React, { Component } from "react";
import "./Slider.css";
class Slider extends Component {
  render() {
    return (
      <div className="home-slider owl-carousel">
        <section className="home-slider">
          <div className="slider-item slider">
            <div className="overlay"></div>
            <div className="container">
              <div
                className="row no-gutters slider-text align-items-center justify-content-start"
                data-scrollax-parent="true"
              >
                <div className="col-md-7">
                  <span className="subheading">sea Bien venido</span>
                </div>
                <div className="col-md-7 scrollflow -slide-top -opacity">
                  <h1 className="mb-4 text">SALÓN DE BELLEZA</h1>
                  <h1 className="mb-4 text">LA HERMOSA</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    );
  }
}

export default Slider;
