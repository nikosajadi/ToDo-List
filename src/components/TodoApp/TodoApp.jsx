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

   useEffect(() => {
      setTasks([
         {
            id: uuidv4(),
            title: 'Default Task',
            status: true, // true = completed, false = active
         },
         {
            id: uuidv4(),
            title: 'Making lunch',
            status: false, // active
         },
      ]);
   }, []);
    
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
      setTasks([
         ...tasks,
         {
            id: uuidv4(),
            title: taskTitle,
            status: false // new tasks are initially active
         }
      ]);
   };

   const deleteTask = (taskId) => {
      const newTasksList = tasks.filter((task) => task.id !== taskId);
      setTasks(newTasksList);
   };

   return (
      <div className="TodoApp">
         <AddTaskForm addTask={addTask} />
         <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
         <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
      </div>
   );
};

export default TodoApp;
