import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({todos, setTodos}){
	return (

		<div className="TodoList">

			{todos.map((task) => (

					<TodoItem key={task.name} item={task} todos={todos} setTodos={setTodos} />

				))}

		</div>

		)
}