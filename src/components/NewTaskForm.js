import React, {useState} from 'react'
import {addTask} from '../actions/index'
import { connect } from 'react-redux';

function NewTaskForm(props) {
  const [task, setTask] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    props.addTask(task)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="New Task" value={task} onChange={e => setTask(e.target.value)}/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: (newTask) => {
      dispatch(addTask(newTask))
    }
  };
};

export default connect(null, 
  mapDispatchToProps
)(NewTaskForm);