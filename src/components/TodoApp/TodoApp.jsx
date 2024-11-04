import TaskList from "../TaskList/TaskList";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import FilterFooter from "../FilterFooter/FilterFooter";
import "./TodoApp.css";
import React, { useState, useEffect } from "react";
import { stringify, v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
   const [tasks, setTasks] = useState([]);
   const [filter, setFilter] = useState('all');
   const [filteredTasks, setFilteredTasks] = useState([]);

   useEffect(()=>{
      let storedTasks = localStorage.getItem('tasks')
      if (storedTasks){ 
          storedTasks = JSON.parse(storedTasks);
      }else {
        storedTasks = []
      }
      setTasks(storedTasks);
  },[])
    
   useEffect(() => {
      if (filter === "all") {
         setFilteredTasks(tasks);
      } else if (filter === "completed") {
         setFilteredTasks(tasks.filter((task) => task.status));
      } else if (filter === "active") {
         setFilteredTasks(tasks.filter((task) => !task.status));
      }
   }, [filter, tasks]);

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

   const deleteTask = (taskId) => {
      const newTasksList = tasks.filter((task) => task.id !== taskId);
      setTasks(newTasksList);
      localStorage.setItem("tasks", JSON.stringify(newTasksList));
   };
   const handleChangeStatus = (taskId) => {
    const newTasksList = tasks.map((task) =>
       task.id === taskId ? { ...task, status: !task.status } : task
    );
    setTasks(newTasksList);
    localStorage.setItem("tasks", JSON.stringify(newTasksList));
 };
   return (
      <div className="TodoApp">
         <AddTaskForm addTask={addTask} />
         <TaskList tasks={filteredTasks} deleteTask={deleteTask}  handleChangeStatus={handleChangeStatus} />
         <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
      </div>
   );
};

export default TodoApp;
