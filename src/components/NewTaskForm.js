import React, { Component } from 'react'
import TaskInputField from './TaskInputField';

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputs: ['input-0'],
    };
}

  render() {
    const inputFields = this.state.inputs.map(input => 
      <TaskInputField input={input} />
    )

    return (
      <div>
        <form>
          <div id="dynamicInput">
            {inputFields}
          </div>
        </form>

        <button onClick={ () => this.appendInput() }>
          +++ 
        </button>
      </div>
    )
  }
  
  appendInput() {
    var newInput = `input-${this.state.inputs.length}`;
    this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
  }
}
