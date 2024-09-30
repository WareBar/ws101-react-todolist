import "./TodoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faCheckToSlot, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function TodoItem({item, todos, setTodos}){




	function handleCheck(task){
		console.log(`item ${task} is Click`)

	}


	function handleDelete(task){
		console.log(`${task.name} IS DELETEEED`)
		setTodos(
				todos.filter((todo) => todo !== task)
			)
	}

	return (

		<div className="TodoItem">
        	<div class="left">
        		
        		<div class="details">
        			<i>
        				<FontAwesomeIcon className="fontIcon" icon={faThumbtack}/>
        			</i>	
        			<p>{item.time}</p>
        		</div>
        		<p>{item.name}</p>

        	</div>

    		<div class="controls">
    			<button onClick={()=>handleCheck(item)}>
    				<i>
    					<FontAwesomeIcon className="fontIcon" icon={faCheckToSlot}/>
    				</i>
    			</button>
    			<button onClick={()=>handleDelete(item)}>
    				<i>
    					<FontAwesomeIcon className="fontIcon" icon={faTrashCan}/>
    				</i>
    			</button>
    		</div>
		</div>

		)
}