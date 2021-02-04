import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class Insert_func extends Component {
  notify = () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const carnet = document.getElementById("carnet").value;
    const email = document.getElementById("email").value;
    const sexo = document.getElementById("sexo").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    if (
      nombre !== "" &&
      apellido !== "" &&
      carnet !== "" &&
      email !== "" &&
      sexo !== "" &&
      direccion !== "" &&
      telefono !== ""
    ) {
      toast.warn("A funcionario insertado com sucesso ", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: true,
      });
    }
  };
  render() {
    return (
      <div className="card-height card shadow col-lg-6">
        <div className="card-header bg-white">
          <h5 className="card-title justify-content-center">
            {" "}
            Registrar Funcionario
          </h5>
        </div>
        <div className="card-body">
          <form onSubmit={this.props.addFuncionario}>
            <div className="form-group">
              <div className="input-group">
                <input
                  id="nombre"
                  value={this.props.valor.nombre}
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  id="apellido"
                  value={this.props.valor.apellido}
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  name="apellido"
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  id="carnet"
                  value={this.props.valor.carnet}
                  type="text"
                  className="form-control"
                  placeholder="Carnet"
                  name="carnet"
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  id="email"
                  value={this.props.valor.email}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <select
                  id="sexo"
                  name="sexo"
                  value={this.props.valor.sexo}
                  onChange={this.props.handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Seleccione el sexo</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <input
                  id="direccion"
                  value={this.props.valor.direccion}
                  type="text"
                  className="form-control"
                  placeholder="Direccion"
                  name="direccion"
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  id="telefono"
                  value={this.props.valor.telefono}
                  type="text"
                  className="form-control"
                  placeholder="Telefono"
                  name="telefono"
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group"></div>
            <button
              type="submit"
              onClick={this.notify}
              className="btn btn-dark py-2 px-2 btn-guardar-registro"
            >
              Add Funcionario
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Insert_func;
