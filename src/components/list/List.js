import React from 'react';
import Task from '../task/Task';
import './list.css';

function List() {
  return (
    <div className="list">
        <Task title=" Task 1" duration={60}  details = {{ type: "IT", date: "2022-05-02"}} />
        <Task title=" Task 2"  duration={60}  details = {{ type: "IT", date: "2022-05-02"}} />
        <Task title=" Task 3"  duration={60}  details = {{ type: "IT", date: "2022-05-02"}} />
        <Task    details = {{ type: "IT", date: "2022-05-02"}}/>

    </div>
  );
}

export default List;