import React from "react";

const Todo = ({todo, todos, setTodos}) => {
	const deleteTask = (e) => {
		setTodos(todos.filter((el) => el.id != todo.id));
	};

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
		<div className="col-lg-12">
			<div className="row">
				<div className="form-group">
					<span className={`form-control ${todo.completed ? "completed" : ""}`}>
						{todo.text}
					</span>
				</div>
				<div className="form-group">
					<button
						onClick={completedTask}
						className="btn btn-success form-control"
					>
						<i className="fa fa-check"></i>
					</button>
				</div>
				<div className="form-group">
					<button onClick={deleteTask} className="btn btn-danger form-control">
						<i className="fa fa-trash"></i>
					</button>
				</div>
				<hr />
			</div>
		</div>
	);
};

export default Todo;
