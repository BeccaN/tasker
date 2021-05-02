import React from 'react'

export default function CompleteTask(props) {
  return (
    <div key={props.task.id}>
      <li><s>ID {props.task.id}: {props.task.task}</s></li> 
    </div>
  )
}
