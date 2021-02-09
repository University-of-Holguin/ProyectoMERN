import React from "react";
import Todo from "./Todo";
const TodoList = ({setTodos, filteredTodos}) => {
	return (
		<div className="todo-lista">
			<ul>
				{filteredTodos.map((todo) => <Todo todo={todo} todos={filteredTodos} setTodos={setTodos} key={todo.id}/>)}
			</ul>
		</div>
	);
};
export default TodoList;
