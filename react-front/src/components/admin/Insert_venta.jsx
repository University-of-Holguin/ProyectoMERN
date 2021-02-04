import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class Inert_venta extends Component {
  notify = () => {
    const nombre = document.getElementById("nombre_peinado").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const fecha = document.getElementById("fecha").value;
    if (nombre !== "" && precio !== "" && cantidad !== "" && fecha) {
      toast.warn("A venta foi guardada com sucesso ", {
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
            Registrar Venta
          </h5>
        </div>
        <div className="card-body">
          <form onSubmit={this.props.addVenta}>
            <div className="form-group">
              <div className="input-group" data-validate="Campo vasio">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tipo de peinado"
                  id="nombre_peinado"
                  name="nombre_peinado"
                  value={this.props.valor.nombre_peinado}
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <input
                  id="precio"
                  type="number"
                  className="form-control"
                  placeholder="Precio del peinado"
                  name="precio"
                  value={this.props.valor.precio}
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <input
                  id="cantidad"
                  type="number"
                  className="form-control"
                  placeholder="Cantidad"
                  name="cantidad"
                  value={this.props.valor.cantidad}
                  onChange={this.props.handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input
                  id="fecha"
                  type="date"
                  className="form-control"
                  placeholder="Fecha de atendimiento "
                  name="fecha"
                  value={this.props.valor.fecha}
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
              Guardar registro
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Inert_venta;
