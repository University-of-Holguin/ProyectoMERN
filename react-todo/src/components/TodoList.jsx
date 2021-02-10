import React from "react";
import Todo from "./Todo";
const TodoList = ({setTodos, filteredTodos}) => {
	return (
		<React.Fragment>
			<div className="todo-lista">
				<ul>
					{filteredTodos.map((todo) => (
						<Todo
							todo={todo}
							todos={filteredTodos}
							setTodos={setTodos}
							key={todo.id}
						/>
					))}
				</ul>
			</div>
		</React.Fragment>
	);
};
export default TodoList;
