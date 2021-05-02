import React from 'react'

export default function Task(props) {

  return (
    <div key={props.task.id}>
      <li>ID {props.task.id}: {props.task.task} <button data-id={props.task.id} onClick={props.handleComplete}>&#10003;</button></li> 
    </div>
  )
}
