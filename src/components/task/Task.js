import React, { useState } from "react"
import "./task.css"
import {
  useHistory,
  Link
} from "react-router-dom";
import { fetchTaskById } from "../../services/tasks.service";
export default function Task({ id, title, duration, deleteTask, updateTask }) {
  const [updateMode, setUpdateMode] = useState(false)
 
  const [titleToUpdate, setTitleToUpdate] = useState(title)
  const [durationToUpdate, setDurationToUpdate] = useState(duration)
  const handleUpdateTask = () => {
    updateTask(id, titleToUpdate, durationToUpdate)
    setUpdateMode(false)
  }
  const history = useHistory()
  const handleDetails = () =>{
    history.push('tasks/' + id)
  }
  return (
    <div className="task">
      {!updateMode ? (
        <>
        {/* <Link to={"tasks/" + id} > */}
          <div onClick={handleDetails} className="link">
            <div className="title">
              {title}  ({duration} mn)
            </div>
          </div>
          {/* </Link> */}
          <div className="actions">
            <div>
              <button onClick={() => deleteTask(id)}>delete</button>
              <button onClick={() => setUpdateMode(true)}>update</button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={titleToUpdate}
            onChange={(e) => setTitleToUpdate(e.target.value)}
          />
          <input
            type="number"
            value={durationToUpdate}
            name="duration"
            onChange={(e) => setDurationToUpdate(e.target.value)}
          />
          <button className="button" onClick={handleUpdateTask}>
            Update a task
          </button>
        </div>
      )}
    </div>
  )
}

