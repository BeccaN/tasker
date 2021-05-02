import { combineReducers } from 'redux'
import tasks from './tasks'
import completeTasks from './completeTasks'

export default combineReducers({
  tasks,
  completeTasks
})