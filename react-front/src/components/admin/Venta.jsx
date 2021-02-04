import React, { Component } from "react";
import "./Venta.css";
import Insert_venta from "./Insert_venta";
class Venta extends Component {
  constructor() {
    super();
    this.state = {
      nombre_peinado: "",
      precio: "",
      cantidad: "",
      ventas: [],
      _id: "",
    };
  }

  addVenta = (e) => {
    if (this.state._id) {
      fetch("http://localhost:3001/api/ventas/" + this.state._id, {
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
            nombre_peinado: "",
            precio: "",
            cantidad: "",

            _id: "",
          });
          this.fetchVenta();
        });
    } else {
      fetch("http://localhost:3001/api/ventas", {
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
            nombre_peinado: "",
            precio: "",
            cantidad: "",

          });
          this.fetchVenta();
        })
        .catch((err) => console.error(err));
    }
    e.preventDefault();
  };

  componentDidMount() {
    this.fetchVenta();
  }

  fetchVenta() {
    fetch("http://localhost:3001/api/ventas")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ventas: data,
        });
        console.log(this.state.ventas);
      });
  }

  deleteVenta = (id) => {
    fetch("http://localhost:3001/api/ventas/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.fetchVenta();
      });
  };
  editVenta = (id) => {
    fetch("http://localhost:3001/api/ventas/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          nombre_peinado: data.nombre_peinado,
          precio: data.precio,
          cantidad: data.cantidad,
          fecha: data.fecha,
          _id: data._id,
        });
      });
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
          <Insert_venta
            addVenta={this.addVenta}
            handleChange={this.handleChange}
            valor={this.state}
          />
          <br />
          <div className="col-lg-6 p-1">
            <table className="table shadow table-responsive">
              <thead id="thead-white">
                <tr>
                  <th scope="col">Nº</th>
                  <th scope="col">Peinado</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                  <th scope="col">Fecha</th>
                  <th scope="col" className="icon-color1">
                    Editar
                  </th>
                  <th scope="col" className="icon-color">
                    Eliminar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {this.state.ventas.map((venta) => (
                  <tr key={venta._id}>
                    <th scope="row">1</th>
                    <td>{venta.nombre_peinado}</td>
                    <td>{venta.precio}</td>
                    <td>{venta.cantidad}</td>
                    <td>{venta.cantidad*venta.precio}</td>
                   
                    <td>
                      <button onClick={() => this.editVenta(venta._id)}>
                        <i className="fa fa-pencil-square-o fa-lg icon-color1"></i>
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.deleteVenta(venta._id)}>
                        <i className="fa fa-trash-o fa-lg icon-color"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Venta;
