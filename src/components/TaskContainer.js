import React, {Component} from 'react'
import NewTaskForm from './NewTaskForm'
import Task from './Task'

export default class TaskContainer extends Component {


  render() {

      return(
          <div className="task-container">
            <h1>To Do Tasks</h1>
            {this.props.tasks.map(task => <Task task={task} />)}
            <NewTaskForm />
          </div>
      );
  }

}