import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterFooter from "../FilterFooter/FilterFooter";
import "./TodoApp.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
   const [tasks, setTasks] = useState([]);
   const [filter, setFilter] = useState('all');
   const [filteredTasks, setFilteredTasks] = useState([]);
   const [refresh,setRefresh] = useState(0)

   // Load tasks from localStorage on initial render to maintain task persistence

   useEffect(()=>{
      let storedTasks = localStorage.getItem('tasks')
      if (storedTasks){ 
          storedTasks = JSON.parse(storedTasks);
      }else {
        storedTasks = []
      }
      setTasks(storedTasks);
  },[])

   // Update the displayed list of tasks based on the selected filter
   useEffect(() => {
      if (filter === "all") {
        setFilteredTasks(tasks);
      }
      if (filter === "completed") {
        const newCompletedFilteredTasks = tasks.filter((task) => task.status);
        setFilteredTasks(newCompletedFilteredTasks);
      }
      if (filter === "active") {
        const newActiveFilteredTasks = tasks.filter((task) => !task.status);
        setFilteredTasks(newActiveFilteredTasks);
      }
    }, [filter, tasks, refresh]);

   // Adds a new task to the task list and saves the updated list to localStorage
   const addTask = (taskTitle) => {
      const newTasks = [
         ...tasks,
         {
            id: uuidv4(),
            title: taskTitle,
            status: false // new tasks are initially active
         }
      ];
      setTasks(newTasks);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
   };

   // Deletes a task by its ID and updates localStorage with the modified list
   const deleteTask = (taskId) => {
      const newTasksList = tasks.filter((task) => task.id !== taskId);
      setTasks(newTasksList);
      localStorage.setItem("tasks", JSON.stringify(newTasksList));
   };

   // Toggles the completion status of a task and synchronizes the change with localStorage
   const handleChangeStatus = (taskId) => {
      const newTasksList = tasks.map((task) =>
         task.id === taskId ? { ...task, status: !task.status } : task
      );
      setTasks(newTasksList);
      localStorage.setItem("tasks", JSON.stringify(newTasksList));
      setRefresh(refresh+1)
   };

   return (
      <div className="TodoApp">
         <AddTaskForm addTask={addTask} />
         <TaskList tasks={filteredTasks} deleteTask={deleteTask} handleChangeStatus={handleChangeStatus} />
         <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
      </div>
   );
};

export default TodoApp;
