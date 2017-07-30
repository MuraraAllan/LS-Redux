import {combineReducers} from 'redux';
import todolist from './Todos'
import todoController from './TodoController'
const rootReducer = combineReducers({
  todolist,
  todoController
});

export default rootReducer;
