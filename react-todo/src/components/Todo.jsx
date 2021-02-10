import React from "react";

const Todo = ({todo, todos, setTodos}) => {

	//Eliminando una tarea mediante su id.
	const deleteTask = (e) => {
		setTodos(todos.filter((el) => el.id != todo.id));
	};


//Cambiando una tarea de un estado al otro. Tarea hecha o por hacer
	const completedTask = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	
	return (
		<React.Fragment>
			<div className="col-lg-12">
				<div className="row">
					<div className="form-group">
						<textarea
							disabled
							className={`form-control ${todo.completed ? "completed" : ""}`}
						>
							{todo.text}
						</textarea>
					</div>
					<div className="form-group">
						<button onClick={completedTask} className="form-control">
							<i className="fa fa-check"></i>
						</button>
					</div>
					<div className="form-group">
						<button onClick={deleteTask} className=" form-control">
							<i className="fa fa-trash"></i>
						</button>
					</div>
					<hr />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Todo;
