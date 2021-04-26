import React from 'react'
import NewTaskForm from './NewTaskForm'
import Task from './Task'

export default function TaskContainer(props) {
  return(
    <div className="task-container">
      <h1>To Do Tasks</h1>
      {props.tasks.map(task => <Task task={task} />)}
      <NewTaskForm handleSubmit={props.handleSubmit} />
    </div>
  );
}