import React, {Component} from 'react'
import NewTaskForm from './NewTaskForm'

export default class TaskContainer extends Component {


  render() {

      return(
          <div className="task-container">
            <h1>To Do Tasks</h1>
            <NewTaskForm />
          </div>
      );
  }

}