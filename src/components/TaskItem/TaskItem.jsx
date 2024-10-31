import React from "react";
import './TaskItem.css'
import { FaFileExcel } from "react-icons/fa";

const TaskItem = ({task}) => {
    return(
        
            <li className="TaskItem ">
                <input  id="Task" type='checkbox'/>
                <h2>{task.title}</h2>
                <button ><FaFileExcel /></button>
          </li>

    
    )
}
export default TaskItem;