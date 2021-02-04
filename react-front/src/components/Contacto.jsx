import React, { Component } from "react";
import "./Contacto.css";

class Contacto extends Component {
  render() {
    return (
      <form action="#" className="bg-ligh contact-form cont">
        <div className="form-group">
          <input
            type="text"
            className="inp form-control"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="inp form-control"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="inp form-control"
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            className="inp form-control"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary py-2 px-4 btn-form"
          />
        </div>
      </form>
    );
  }
}

export default Contacto;
