import {SIGNED_IN, SET_PROJECTS} from '../constants';

export function logUser(email){

  const action={
    type:SIGNED_IN,
    email
  }
  return action;
}

export function setProjects(projects){
  const action={
    type:SET_PROJECTS;
    projects
  }
  return action;
}
export function setCustomers(customers){
  const action={
    type:SET_CUSTOMERS;
    customers
  }
  return action;
}
