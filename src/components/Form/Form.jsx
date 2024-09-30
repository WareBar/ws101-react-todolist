import "./Form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";	

export default function Form({todos, setTodos}){

	let showDate = new Date();
	let currentTime = `${showDate.getHours()}:${showDate.getMinutes()}:${showDate.getSeconds()}`

	const [todo, setTodo] = useState({name:"", done:false, time:currentTime})

	function handleSubmit(e){
		e.preventDefault();

		if (todo.name.length > 8){
			setTodos([...todos, todo]);
		}
		else{
			alert("The Character Length Should Be > 8, Please Retry")
		}

		setTodo({name:"", done:false, time:currentTime})

	}


	return (
		<div className="Form">
			<form onSubmit={handleSubmit}>		
				<input type="text" placeholder="Insert Task"
				onChange={(e)=>setTodo({name:e.target.value, done:false, time:currentTime})}
				value={todo.name}
				 />
				
				<button>
					<i>
						<FontAwesomeIcon className="fontIcon" icon={faSquarePlus} />
					</i>
				</button>
			</form>
			{console.log(todos)}
		</div>

		)
}