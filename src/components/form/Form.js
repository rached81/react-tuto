import React from 'react';
import './form.css';
const steps = [ 'Enter a task', 'click on button']
function Form(props) {
props.sayHello();
  return (
  
  
<div className="Form">
<ul>
{steps.map((e) =>(<li>{e}</li>))}
      </ul>
<form action="" class="form">
        <input type="text" name="task" id=""/>
        <button type="submit">Add a task</button>
    </form>
    </div>
  );
}

export default Form;