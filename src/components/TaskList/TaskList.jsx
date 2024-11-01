import React from "react";
import './TaskList.css'
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({tasks, deleteTask}) => {
    return(
        <div className="TaskList">
        <ul>
       
        {tasks.map(task => 
        <TaskItem task={task} deleteTask={deleteTask}/>)}

        </ul>
       </div>
        )

}

export default TaskList;