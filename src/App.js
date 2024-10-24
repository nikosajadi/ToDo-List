


import Header from './components/Header/Headr';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import './App.css';



function App() {
  return (
    <div className="App">
          <Header />
         <AddTaskForm />
         
         <div>
          <ul>
            <li>
              <input  type='checkbox'/>
              <h2>Buld This APP</h2>
              <button >Delet</button>
            </li>
          </ul>
         </div>
         <div>
            2 items
           </div>
           <div>
            <ul>
              <li><button>All</button></li>
              <li><button>Active</button></li>
              <li><button>Completed</button></li>

            </ul>
           </div>
    

    </div>
  );
}

export default App;
