import React from 'react'
import {connect} from 'react-redux';
import CompleteTask from './CompleteTask'

function CompleteTaskContainer(props) {
  return (
    <div className="completed-task-container">
      <h1>Completed Tasks</h1>
      {props.tasks.map(task => <CompleteTask task={task} />)}
    </div>
  )
}

const mapStateToProps = state => {
  return { tasks: state.completeTasks }
}

export default connect(mapStateToProps)(CompleteTaskContainer)