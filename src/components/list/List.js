import React from 'react';
import Task from '../task/Task';
import './list.css';

function List(props) {
  
  return (
    <div className="list">
       
        {/* use{} */}
      { 
      
      props.tasks.map((task) =>{
            return <Task title={task.id} duration={task.duration}  type ={task.type} />
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