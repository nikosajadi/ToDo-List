
import React, { useState } from "react";
import "./AddTaskForm.css";

const AddTaskForm = () => {
    const [value,setValue] = useState('')
    const handleChange  = (event) => {
        if(event) event.preventDefault();
        setValue(event.target.value)
    } 
    console.log ("value",value)
    const handleSubmit =()=>{
        
    }
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