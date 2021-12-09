import React, { useState } from 'react';
import './task.css';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
function Task(props) {
  const handleDeleteTask = () => { props.deleteTask(props.id)}
  const [isUpdateMode, setIsUpdateMode] = useState(false)
  const [taskToUpdate, setTaskToUpdate] = useState({id: props.id, title: "", duration: 0})

  const handleUpdateTask = () =>{
    props.updateTask({id: props.id, title: taskToUpdate.title, duration: taskToUpdate.duration })
    setIsUpdateMode(false)
  }

  
  return (
    <div  class="panel panel-default" >
{!isUpdateMode ? (
  <>
<div   class="panel-body">
 
  
    <ul>
       <li>id : {props.id}</li> 
      <li>Title : {props.title}</li>
        <li>duration :{props.duration}</li>
        <li>type :{props.type} </li>
        <li> date :{props.date}</li>
    </ul>
</div>
<div class="actions">
<Button className="button" class="btn btn-danger" onClick={handleDeleteTask}>delete</Button>
<Button className="button" class="btn btn-primary" onClick={()=> setIsUpdateMode(true)}>update</Button>
</div>
</>
):(
<div>
<input  type="text" 
        name="title" 
        value={taskToUpdate.title}
        onChange={(e) => setTaskToUpdate({...taskToUpdate, title:e.target.value})} />
<input type="number" 
        name="duration" 
        value={taskToUpdate.duration}
        onChange={(e) => setTaskToUpdate({...taskToUpdate, duration: e.target.value})} />
<Button className="button" class="btn btn-danger" onClick={handleUpdateTask}>update</Button>


</div>
)

}
    
    </div> );
}

export default Task;