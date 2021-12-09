import React, { useState } from 'react';
import './form.css';
const steps = [ 'Enter a task', 'click on button']

function Form(props) {

props.sayHello();
const [title, setTitle ] = useState("learn")
const handletitleChange = (e) => { setTitle(e.target.value)}
const handleAddTask = () => { props.addTask(title)}
  return (
  
  
<div className="Form">
<ul>
{steps.map((e) =>(<li>{e}</li>))}
      </ul>

<input type="text"  name="task" id="" value={title} onChange={(e)=>handletitleChange(e)}/>
        
        <button className="btn" onClick={handleAddTask}>add Task</button>
            </div>
  );
}

export default Form;