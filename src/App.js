import TaskContainer from './components/TaskContainer'
import CompleteTaskContainer from './components/CompleteTaskContainer'
import React, {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState(['do laundry', 'pay bills', 'walk the dog'])
  
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    //setTasks to new array of tasks including new task
  }

  return (
    <div className="App">
      <TaskContainer tasks={tasks} handleSubmit={handleSubmit}/>
      <CompleteTaskContainer />
    </div>
  );
}

export default App