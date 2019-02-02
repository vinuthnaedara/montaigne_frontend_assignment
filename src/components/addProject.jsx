import React, { Component } from 'react';
import {connect} from 'react-redux';
import {projectRef} from '../firebase';

class AddProject extends Component{
constructor(props){
  super(props);
  this.state={
    title:''
  }
}
  addProject(){
    console.log('this',this);
    const {title}=this.state;
    const {email}=this.props.user;
    projectRef.push({email,title});
  }
  render(){
return(
  <div className="form-inline">
  <div className="form-group">
  <input
  type="text"
  placeholder="Add a project"
  className="form-control"
  style={{marginRight: '5px'}}
  onChange={event=>this.setState({title:event.target.value})}
  />
  <button
className="btn btn-success"
type="button"
onClick={()=>this.addProject()}
  >
Submit
  </button>

  </div>
  </div>
)

  }
}

function mapStateToProps(state){
  const {user} = status;
  console.log('state in AddProject.jsx',state);
  return{
    user
  }
}

export default connect(mapStateToProps,null)(AddProject);
