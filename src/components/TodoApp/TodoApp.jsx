import React from "react";
import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterFooter from "../FilterFooter/FilterFooter";



const TodoApp = () => {
    return(
        <div>
              <AddTaskForm />
              <TaskList />
              <FilterFooter />

    
        </div>
        )

}

export default TodoApp;