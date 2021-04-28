import React from 'react'
import {connect} from 'react-redux';
import NewTaskForm from './NewTaskForm'
import Task from './Task'

function TaskContainer(props) {
  return(
    <div className="task-container">
      <h1>To Do Tasks</h1>
      {props.tasks.map(task => <Task task={task} />)}
      <NewTaskForm handleSubmit={props.handleSubmit} />
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    tasks: state.tasks
  }
}

export default connect(
  mapStatetoProps
)(TaskContainer)