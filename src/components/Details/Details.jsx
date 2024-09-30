import "./Details.css";


export default function Details({todos}){
	return (

		<div className="Details">
			<p>
				<span>Today's Task</span>
				<span>0/{todos.length}</span>
			</p>
		</div>

		)
}