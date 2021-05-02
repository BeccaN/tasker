export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    task
  };
};

export const removeTask = (id) => {
  return {
    type: 'REMOVE_TASK',
    id
  };
};

export const addCompleteTask = (task) => {
  return {
    type: 'ADD_COMPLETE_TASK',
    task
  }
}