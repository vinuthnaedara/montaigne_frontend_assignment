import {combineReducers} from 'redux';
import user from './reducer_user';
import projects from './reducer_projects';
import customers from './reducer_customers';

export default combinedReducers({
  user,
  projects
})
export default combinedReducers({
  user,
  customers
})
