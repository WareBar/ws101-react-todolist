import "./Todo.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Details from "../Details/Details";
import TodoList from "../TodoList/TodoList";
import { useState } from "react";

export default function Todo(){

	const [todos, setTodos] = useState([]);

	return (

		<div className="Todo">
			<Header/>
			<Form todos={todos} setTodos={setTodos}/>
			<Details todos={todos}/>
			<TodoList todos={todos} setTodos={setTodos}/>
		</div>

		)
}