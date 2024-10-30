import React from "react";
import './TaskItem.css'
import { FaFileExcel } from "react-icons/fa";

const TaskItem = () => {
    return(
        
            <li className="TaskItem">
            <input  id="Task" type='checkbox'/>
            <h2>Buld This APP</h2>
            <button ><FaFileExcel /></button>
          </li>

    
    )
}
export default TaskItem;