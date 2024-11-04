
import React, { useState } from "react";
import "./AddTaskForm.css";


const AddTaskForm = ({ addTask }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log("Value while typing:", event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        if (!value.trim()) {
            return;
        }
        addTask(value.trim());
        setValue(''); // Clear the input after submission
        console.log("Input cleared:", value); // Check the value after clearing
    };

    return(
        <div className="AddTaskForm">
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' placeholder='what need to be done'/>
        <button  type='submit'>Add</button>
        </form>
        </div>

    )
}

export default AddTaskForm;