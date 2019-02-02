import {SET_PROJECTS} from '../constants';
import {SET_CUSTOMERS} from '../constants';
export default (state=[],action)=>{
switch(action.type){
  case SET_PROJECTS:
  const {projects}=action;
  return projects;
  default:
  return state;
  case SET_CUSTOMERS:
  const {customers}=action;
  return customers;
  default:
  return state;
}


}
