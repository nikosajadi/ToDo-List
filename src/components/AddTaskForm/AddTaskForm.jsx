import React from "react";
import "./AddTaskForm.css";

const AddTaskForm = () => {
    return(
        <div className="AddTaskForm">
        <form>
        <input type='text' placeholder='what need to be done'/>
        <button type='submit'>Add</button>
        </form>
        </div>

    )
}

export default AddTaskForm;