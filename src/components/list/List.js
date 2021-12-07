import React from 'react';
import Task from '../task/Task';
import './list.css';

function List() {
  return (
    <div className="list">
        <Task />
        <Task />
        <Task />

    </div>
  );
}

export default List;