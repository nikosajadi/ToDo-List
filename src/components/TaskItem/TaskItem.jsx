import React from "react";
import './TaskItem.css'
import { FaFileExcel } from "react-icons/fa";

const TaskItem = ({task, deleteTask}) => {
    return(
        
            <li className="TaskItem ">
                <input  id="Task" type='checkbox'  checked ={task.status}/>
                <h2>{task.title}</h2>
                <button
      onClick={() => {
        deleteTask(task.id);
      }}
    ><FaFileExcel /></button>
          </li>

    
    )
}
export default TaskItem;