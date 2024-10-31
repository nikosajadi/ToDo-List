import React from "react";
import './TaskList.css'
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({tasks}) => {
    return(
        <div className="TaskList">
        <ul>
       
        {tasks.map(task => <TaskItem task={task}/>)}

        </ul>
       </div>
        )

}

export default TaskList;