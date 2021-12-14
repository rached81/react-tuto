import React, { useState, useEffect } from 'react';

import {
    useHistory,
    useParams,
  
  } from "react-router-dom";
import { fetchTaskById } from '../../services/tasks.service';
function TaskDetails(props) {
const [task, setTask] = useState({})

const params = useParams()
console.log(params)

useEffect(() => {
  const fetchData = async () => {
    const result = await fetchTaskById(params.id)
    console.log(result)
    setTask(result)
  }
  fetchData()
  
}, [])
  return (
  
  
<div className="details">
<ul>
<li>{task.title}</li>
<li>{task.duration}</li>
      </ul>

        
        {/* <button className="btn" onClick={}>back</button> */}
            </div>
  );
}

export default TaskDetails;