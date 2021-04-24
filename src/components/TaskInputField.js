import React from 'react'

export default function TaskInputField(props) {
  return (
    <div className="task-input-field">
      <input type="text" key={props.input} placeholder="Task"/>
    </div>
  )
}