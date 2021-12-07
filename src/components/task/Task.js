import React from 'react';
import './task.css';

function Task() {
  return (

    <div class="task" style={{backgroundColor: "red"}}>
        <div class="title">
            Learn Html
        </div>
        <div class="actions">
            <span>delete</span>
            
            <span>update</span>
        </div>
    </div>
 
  );
}

export default Task;