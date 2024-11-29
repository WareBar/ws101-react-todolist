import "./Details.css";


export default function Details({todos}){
	return (

		<div className="Details">
			<p>
				<span>Completed Task</span>
				<span>
					{(todos.filter((todo)=>todo.done === true)).length}/{todos.length}
				</span>
			</p>
		</div>

		)
}