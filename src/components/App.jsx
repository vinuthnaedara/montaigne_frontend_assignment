import React, { Component } from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddProject from './AddProject';
import ProjectList from './ProjectList';
import AddCustomer from './AddCustomer';
import CustomerList from './CustomerList';
class App extends Component{
  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return(
      <div style={{margin: '5px'}}>
      <h1>project page </h1>
      <AddProject />
      <hr />
      <h4>projects</h4>
      <ProjectList />
      <hr />
      <button
      className="btn btn-danger"
      onClick={()=>this.signOut()}
      >
      Sign Out
</button>
      </div>
      <div style={{margin: '5px'}}>
      <h1>Customer page </h1>
      <AddCustomer />
      <hr />
      <h4>customers</h4>
      <CustomerList />
      <hr />
      <button
      className="btn btn-danger"
      onClick={()=>this.signOut()}
      >
      Sign Out
</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  //console.log('state',state);
  return{}
}

export default connect(mapStateToProps,null)(App);
