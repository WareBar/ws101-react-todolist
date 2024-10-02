import "./TodoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faThumbtackSlash, faCheckToSlot, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function TodoItem({item, todos, setTodos}){




	function handleCheck(task){
		setTodos(
			todos.map((todoItem)=>todoItem.name === task.name? {...todoItem, done: !todoItem.done}: todoItem)
			)

		console.log(todos)

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
        				{item.done === true?
        					<FontAwesomeIcon className="fontIcon" icon={faThumbtackSlash}/> : <FontAwesomeIcon className="fontIcon" icon={faThumbtack}/>
        				}
        			</i>	
        			<p>{item.time}</p>
        		</div>
        		<p className={item.done === true? "todo-item-checked":""}>{item.name}</p>

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