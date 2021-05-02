
export default function tasks(state = [
  {id: 1, task: 'incomplete 1'}, 
  {id: 2, task: 'incomplete 2'}
], action) {
  switch (action.type) {
    case 'ADD_TASK':
      const formattedTask ={
        id: state.length + 1,
        task: action.task
      }
      return state.concat(formattedTask);

    case 'REMOVE_TASK':
      const idx = state.findIndex(task => task.id === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    default:
      return state
  }
}