export default function manageTasks(
  state = {
  tasks: [],
}, action) {
  switch(action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }

    default:
      return state
  }
}
