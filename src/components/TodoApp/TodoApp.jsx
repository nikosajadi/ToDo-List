import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterFooter from "../FilterFooter/FilterFooter";
import "./TodoApp.css";
import React, { useState, useEffect } from "react";

const TodoApp = () => {
   const [tasks,setTasks] = useState([]);

   useEffect (()=>{
    setTasks ([
        {
            title:'Default title',
            status: true //boolean,
        },
        {
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