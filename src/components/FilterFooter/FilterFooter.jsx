import React from "react";
import './FilterFooter.css'




const FilterFooter = ({tasks}) => {
return (
    <div className="FilterFooter">
       <div className="FilterFooter__countItems"> {tasks.length} </div>
       <div className="FilterFooter__filters">
    <ul>
      <li><button>All</button></li>
      <li><button>Active</button></li>
      <li><button className="active">Completed</button></li>

    </ul>
   </div>
   </div>
)
}
export default FilterFooter;