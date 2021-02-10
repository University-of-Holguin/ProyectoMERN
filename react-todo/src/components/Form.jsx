import React from "react";
const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

	//Entrando el nombre de la tarea
	const inputTarea = (e) => {
		setInputText(e.target.value);
	};
//Creando la tarea y pasando al listado de tareas
	const sudmitTodo = (e) => {
		e.preventDefault();
		if (inputText) {
			setTodos([
				...todos,
				{text: inputText, completed: false, id: Math.random() * 1000},
			]);
			setInputText("");
		} else {
			alert("Entre una tarea por favor");
		}
	};
//Buscador de tareas especificas.
	const statusHundler = (e) => {
		setStatus(e.target.value);
	};
	return (
		<React.Fragment>
			<div className="col-lg-12">
				<form className="row">
					<div className="form-group">
						<input
							type="text"
							required
							className="todo-input form-control"
							onChange={inputTarea}
							value={inputText}
						/>
					</div>
					<div className="form-group">
						<button
							id="button"
							onClick={sudmitTodo}
							className="form-control"
							type="submit"
						>
							ADD<i className="fa fa-plus-square"></i>
						</button>
					</div>
					<div className="form-group">
						<select
							onChange={statusHundler}
							name="todos"
							className="filter-todo form-control"
						>
							<option value="all">Todas Tareas</option>
							<option value="completed">Tareas Hechas</option>
							<option value="uncompleted">Tareas por hacer</option>
						</select>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};
export default Form;
