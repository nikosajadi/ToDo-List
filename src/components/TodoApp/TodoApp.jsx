import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterFooter from "../FilterFooter/FilterFooter";
import "./TodoApp.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
   const [tasks,setTasks] = useState([]);
   
   useEffect(() => {
    setTasks([
        {
            title: 'Default Task',
            status: true, //boolean
        },
        {
            title: 'Making lunch',
            status: false, //boolean
        },
    ]);
}, []); 

   const addTask = (taskTitle) => {
    setTasks ([
        ...tasks,
        {
            id: uuidv4(),// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
            title: taskTitle,
            status: true //boolean,
        }
     ]);
     
   }
   const deleteTask = (taskId) => {
    let newTasksList = tasks
    delete newTasksList[tasks.findIndex((task) => task.id === taskId)];
    newTasksList= newTasksList.filter((item) => item);
    setTasks(newTasksList);
  
}
    return(
        <div className="TodoApp">
              <AddTaskForm addTask={addTask}/>
              <TaskList tasks={tasks} deleteTask={deleteTask}/>
              <FilterFooter tasks={tasks} />

    
        </div>
        )

}

export default TodoApp;