
export default function completeTasks(state = [
  {id: 1, task: 'complete 1'}, 
  {id: 2, task: 'complete 2'}
], action) {
  switch (action.type) {
    case 'ADD_COMPLETE_TASK':
      return [...state, action.task]
    default:
      return state
  }
}