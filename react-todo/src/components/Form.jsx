import React from "react";
const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
	//Entrando la tarea mediante javascript

	const inputTarea = (e) => {
		setInputText(e.target.value);
	};

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

	const statusHundler = (e) => {
		setStatus(e.target.value);
	};
	return (
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
						className="todo-button form-control btn btn-"
						type="submit"
					>
						<i className="fa fa-plus-square"></i>
					</button>
				</div>
				<div className="form-group">
					<div className="select">
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
				</div>
			</form>
		</div>
	);
};
export default Form;
