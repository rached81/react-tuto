import React from 'react';
import Task from '../task/Task';
import './list.css';

function List(props) {

  return (
    <div className="list">
       
        {/* use{} */}
      { 
      
      props.tasks.map((task) =>{
            return <Task 
            id={task.id} 
            key={task.id} 
            title={task.title} 
            duration={task.duration}  
            type ={task.type} 
            date = {task.date} 
            deleteTask = {props.deleteTask} 
            updateTask= {props.updateTask}>
              <p> data children</p>
              </Task>
        })
        // use ()
    //    props.tasks.map((task) =>(
    //         <Task title={task.id} duration={task.duration}  type ={task.type} />
    //   ))
    }   

    </div>
  );
}

export default List;