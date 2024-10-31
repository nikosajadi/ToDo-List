import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterFooter from "../FilterFooter/FilterFooter";
import "./TodoApp.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
   const [tasks,setTasks] = useState([]);

   useEffect (()=>{
    setTasks ([
        {   
            id: uuidv4(),// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
            title:'Default title',
            status: true //boolean,
        },
        {    id: uuidv4(), 
            title:'book meeting',
            status: false //boolean,
        },
     ]);

   },[])

    return(
        <div className="TodoApp">
              <AddTaskForm />
              <TaskList tasks={tasks} />
              <FilterFooter />

    
        </div>
        )

}

export default TodoApp;