import React from "react";
import './TaskList.css';
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, deleteTask, handleChangeStatus }) => {
    return (
        <div className="TaskList">
            <ul>
                {tasks.map(task => 
                    <TaskItem 
                        key={task.id}  // Add a unique key for each item
                        task={task} 
                        deleteTask={deleteTask} 
                        handleChangeStatus={handleChangeStatus} 
                    />
                )}
            </ul>
        </div>
    );
};

export default TaskList;
