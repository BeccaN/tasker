import React, {useState} from 'react'
import TaskInputField from './TaskInputField';

export default function NewTaskForm(props) {
  const [inputs, setInputs] = useState(['input-0'])

    let appendInput = () => {
      var newInput = `input-${this.state.inputs.length}`;
      this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }

    const inputFields = inputs.map(input => 
      <div>
        <TaskInputField input={input} />
        <input type="submit" /> <button>Delete</button>
      </div>
    )

    return (
      <div>
        <form onSubmit={props.handleSubmit}>
          <div id="dynamicInput">
            {inputFields}
          </div>
        </form>

        {(() => {
          if (inputs.length < 1) {
            return (
              <button onClick={ () => appendInput() } >
                +++ 
              </button>
            )
          }
        })()}

      </div>
    )
}