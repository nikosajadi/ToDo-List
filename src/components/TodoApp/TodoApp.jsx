import React from "react";
import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterFooter from "../FilterFooter/FilterFooter";
import "./TodoApp.css";


const TodoApp = () => {
    return(
        <div className="TodoApp">
              <AddTaskForm />
              <TaskList />
              <FilterFooter />

    
        </div>
        )

}

export default TodoApp;