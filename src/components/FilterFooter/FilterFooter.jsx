import React, {useState} from "react";
import './FilterFooter.css'




const FilterFooter = ({ tasks, updateFilter }) => {
   const [filter,setFilter] = useState('all')

   const handleFilter =(filterName)=>{
      setFilter(filterName)
      updateFilter(filterName); // Update the filter state in TodoApp
     
   }
  
return (
   <div className="FilterFooter">
   <div className="FilterFooter__countItems"> {tasks.length} </div>
   <div className="FilterFooter__filters">
      <ul>
         <li>
            <button 
               onClick={() => handleFilter('all')} 
               className={filter === "all" ? "active" : ""}
            >
               All
            </button>
         </li>
         <li>
            <button 
               onClick={() => handleFilter('Active')} 
               className={filter === "active" ? "active" : ""}
            >
               Active
            </button>
         </li>
         <li>
            <button 
               onClick={() => handleFilter('completed')} 
               className={filter === "completed" ? "active" : ""}
            >
               Completed
            </button>
         </li>
      </ul>
   </div>
</div>
);
};
export default FilterFooter;