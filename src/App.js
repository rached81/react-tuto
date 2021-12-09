import logo from './logo.svg';
import './App.css';
import List from './components/list/List';
import Form from './components/form/Form';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }
  const  [tasks, setTasks] = useState([
    {
        id: 1,
        title: "Titre1",
        duration: 25,
        type: "Type 1",
        date: "05-05-2022"
    },
    {
        id: 2,
        title: "T2",
        duration: 25,
        type: "Type 2",
        date: "05-05-2022"
    },
    {
        id: 3,
        title: "T3",
        duration: 25,
        type: "Type 2",
        date: "05-05-2022"
    },
    {
        id: 4,
        title: "T4",
        duration: 25,
        type: "Type 3",
        date: "05-05-2022"
    }
])
const sayHello = () => { console.log("Hello")}
function sayHello2(){
  console.log('hello 2')
}
const addTask = (title) =>{
  const newTask = {id:"" + tasks.length + 1, title: title, duration: 15, type: "test", date: "22-10-2022"};
  setTasks(tasks.concat(newTask))
}
const deleteTask = (id) =>{
  setTasks(tasks.filter(task => task.id != id))
}
const updateTask = (newtask) =>{
  // first solution
  setTasks(tasks.map(task => {
    if(task.id == newtask.id){
      return newtask
    }
    return task
  }))
}
  return (
    <div className="App">
      <div className="toggle">
      {/* 1ere solution */}
        <button onClick={ ()=> toggleVisibility()}>Toggle Visibility</button>
         {/* 2eme solution */}
         <button onClick={toggleVisibility}>Toggle Visibility 2</button>
      </div>
      {isVisible && (
        <div>
          <Form sayHello={sayHello} addTask = {addTask} />
        </div>
      )}
    
     <List tasks = {tasks} deleteTask = {deleteTask} updateTask = {updateTask}/>
    </div>
  );
}

export default App;
