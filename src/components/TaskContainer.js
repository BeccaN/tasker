import React from 'react'
import {connect} from 'react-redux';
import NewTaskForm from './NewTaskForm'
import Task from './Task'
import {removeTask} from '../actions/index'

function TaskContainer(props) {
  const handleComplete = (e) => {
    props.removeTask(parseInt(e.target.dataset.id))
  }
  
  return(
    <div className="task-container">
      <h1>To Do Tasks</h1>
      {props.tasks.map(task => <Task task={task} handleComplete={handleComplete}/>)}
      <NewTaskForm />
    </div>
  );
}



const mapStateToProps = state => {
  return { tasks: state.tasks }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTask: (id) => {
      dispatch(removeTask(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)