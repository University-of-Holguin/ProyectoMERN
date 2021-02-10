import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import Form from './components/Form'
import Header from './components/Header'

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodo] = useState([])


  //Cargar el LocalStorege
  useEffect(() => {
    getLocalStorege()
  }, [])


  //Escuchando cambios en el estado
  useEffect(() => {
    filterHundler()
    saveLocalStorage()
  }, [todos, status])

  //Filtrando las tareas
  const filterHundler = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todos.filter(todo => todo.completed == true))
        break;
      case "uncompleted":
        setFilteredTodo(todos.filter(todo => todo.completed == false))
        break;
      default:
        setFilteredTodo(todos)
        break;
    }
  }

  //Salvar en variables locale
  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  //Cargar el LocalStorege
  const getLocalStorege = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodos)
    }
  }


  return (
    <div className="App container">
      <div className="row">
        <Header />
        <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} setStatus={setStatus} />
        
        {todos.length==0? <h3>No hay Tareas</h3>:<TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} /> }
      </div>

    </div>
  );
}

export default App;
