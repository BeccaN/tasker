import TaskContainer from './components/TaskContainer'
import CompleteTaskContainer from './components/CompleteTaskContainer'
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(['do laundry', 'pay bills', 'walk the dog'])
  
  return (
    <div className="App">
      <TaskContainer tasks={tasks} />
      <CompleteTaskContainer />
    </div>
  );
}

export default App;