import React from 'react';
import './task.css';

function Task(props) {
  return (

    <div class="task" style={{backgroundColor: "red"}}>
        <div class="title">
            {props.title}
            <ul>
                <li>duration :{props.duration}</li>
                {props.details&& 
                <>
                    <li>type :{props.details.type} </li>
                    <li> date :{props.details.date}</li>
                </>
                }
            </ul>
        </div>
        <div class="actions">
            <span>delete</span>
            
            <span>update</span>
        </div>
    </div>
 
  );
}

export default Task;