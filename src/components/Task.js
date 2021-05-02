import React from 'react'

export default function Task(props) {
  const handleClick = (e) => {
    console.log(e.target.dataset.id)
  }

  return (
    <div key={props.task.id}>
      <li>ID {props.task.id}: {props.task.task} <button data-id={props.task.id} onClick={handleClick}>&#10003;</button></li> 
    </div>
  )
}
