import React, { Component } from "react";
import "./Galeria.css";
class Galeria extends Component {
  constructor() {
    super();
    this.state = {
      imagen: "",
      titulo: "",
      descriccion: "",
      imagenes: [],
      _id: "",
    };
  }
  addImagen = (e) => {
    if (this.state._id) {
      fetch("http://localhost:3001/api/imagenes/" + this.state._id, {
        method: "PUT",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({
            imagen: "",
            titulo: "",
            descriccion: "",
            _id: "",
          });
          this.fetchImage();
        });
    } else {
      fetch("http://localhost:3001/api/imagenes", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => console.log(res))
        .then((data) => {
          console.log(data);
          this.setState({
            imagen: "",
            titulo: "",
            descriccion: "",
          });
          this.fetchImage();
        })
        .catch((err) => console.error(err));
    }
    e.preventDefault();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="container p-3">
        <div className="row">
          <div className="card col-lg-8">
            <br />
            <br />
            <div className="card-body">
              <form onSubmit={this.addImagen}>
                <div className="form-group">
                  <div className="input-group">
                    <div className="custom-file">
                      <div className="input-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            name="imagen"
                            className="custom-file-input"
                            onChange={this.handleChange}
                            required
                          />
                          <label className="custom-file-label">
                            Elija una imagen
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="titulo"
                    className="form-control"
                    placeholder="Titulo de la imagen"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="descriccion"
                    rows="2"
                    className="form-control"
                    placeholder="Descripción de la imagen"
                    onChange={this.handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-subir-image py-2 px-2"
                  >
                    <i className="fa fa-upload"></i> Subir imagen
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header bg-white">
                <h5 className="text-dark carde">
                  <i className="fa fa-image"></i> Imagen recien subida
                </h5>
              </div>
              <div className="card-body">
                <a
                  className="block-20 d-flex align-items-end image1"
                  href={"/"}
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Galeria;
