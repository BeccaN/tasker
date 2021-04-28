import TaskContainer from './components/TaskContainer'
import CompleteTaskContainer from './components/CompleteTaskContainer'
import React from 'react'

function App() {

  return (
    <div className="App">
      <TaskContainer />
      <CompleteTaskContainer />
    </div>
  );
}

export default App