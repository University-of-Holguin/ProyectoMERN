import React, { Component } from "react";
import "./Funcionario.css";
import Insert_func from "./Insert_func";
class Funcionario extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      apellido: "",
      carnet: "",
      email: "",
      sexo: "",
      direccion: "",
      telefono: "",
      funcionarios: [],
      _id: "",
    };
  }

  addFuncionario = (e) => {
    if (this.state._id) {
      fetch("http://localhost:3001/api/funcionarios/" + this.state._id, {
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
            nombre: "",
            apellido: "",
            carnet: "",
            email: "",
            sexo: "",
            direccion: "",
            telefono: "",
            _id: "",
          });
          this.fetchFuncionario();
        });
    } else {
      fetch("http://localhost:3001/api/funcionarios", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => console.log(res))
        .then((data) => {
          this.setState({
            nombre: "",
            apellido: "",
            carnet: "",
            email: "",
            sexo: "",
            direccion: "",
            telefono: "",
          });
          console.log(this.fetchFuncionario())
        })
        .catch((err) => console.error(err));
    }
    e.preventDefault();
  };

  componentDidMount() {
    this.fetchFuncionario();
  }

  fetchFuncionario() {
    fetch("http://localhost:3001/api/funcionarios")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          funcionarios: data,
        });
        console.log(this.state.funcionarios);
      });
  }

  deleteFuncionario = (id) => {
    fetch("http://localhost:3001/api/funcionarios/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.fetchFuncionario();
      });
  };
  editFuncionario = (id) => {
    fetch("http://localhost:3001/api/funcionarios/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          nombre: data.nombre,
          apellido: data.apellido,
          carnet: data.carnet,
          email: data.email,
          sexo: data.sexo,
          direccion: data.direccion,
          telefono: data.telefono,
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
          <div className="col-lg-12 p-1">
            <table className="table shadow table-responsive">
              <thead id="thead-white">
                <tr>
                  <th scope="col">Nº</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Carnet</th>
                  <th scope="col">Email</th>
                  <th scope="col">Sexo</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col" className="icon-color1">
                    Editar
                  </th>
                  <th scope="col" className="icon-color">
                    Eliminar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {this.state.funcionarios.map((funcionario) => (
                  <tr key={funcionario._id}>
                    <th scope="row">1</th>
                    <td>{funcionario.nombre}</td>
                    <td>{funcionario.apellido}</td>
                    <td>{funcionario.carnet}</td>
                    <td>{funcionario.email}</td>
                    <td>{funcionario.sexo}</td>
                    <td>{funcionario.direccion}</td>
                    <td>{funcionario.telefono}</td>
                    <td>
                      <button
                        onClick={() => this.editFuncionario(funcionario._id)}
                      >
                        <i className="fa fa-pencil-square-o fa-lg icon-color1"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => this.deleteFuncionario(funcionario._id)}
                      >
                        <i className="fa fa-trash-o fa-lg icon-color"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Insert_func
            addFuncionario={this.addFuncionario}
            handleChange={this.handleChange}
            valor={this.state}
          />
        </div>
      </div>
    );
  }
}
export default Funcionario;
