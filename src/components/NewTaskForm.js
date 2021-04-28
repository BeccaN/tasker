import React, {useState} from 'react'
import { connect } from 'react-redux';

function NewTaskForm() {
  const [task, setTask] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    console.log(task)
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
    addTask: () => dispatch({ type: 'ADD_TASK' })
  };
};

export default connect(
  mapDispatchToProps
)(NewTaskForm);