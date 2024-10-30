import React from "react";
import './TaskItem.css'
import { FaFileExcel } from "react-icons/fa";

const TaskItem = () => {
    return(
        <div className="TaskItem">
            <li>
            <input  type='checkbox'/>
            <h2>Buld This APP</h2>
            <button ><FaFileExcel /></button>
          </li>

        </div>
    )
}
export default TaskItem;