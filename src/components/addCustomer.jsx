import React, { Component } from 'react';
import {connect} from 'react-redux';
import {projectRef} from '../firebase';

class AddCustomer extends Component{
constructor(props){
  super(props);
  this.state={
    title:''
  }
}
  addCustomer(){
    console.log('this',this);
    const {title}=this.state;
    const {email}=this.props.user;
    customerRef.push({email,title});
  }
  render(){
return(
  <div className="form-inline">
  <div className="form-group">
  <input
  type="text"
  placeholder="Add a customer"
  className="form-control"
  style={{marginRight: '5px'}}
  onChange={event=>this.setState({title:event.target.value})}
  />
  <button
className="btn btn-success"
type="button"
onClick={()=>this.addCustomer()}
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
  console.log('state in AddCustomer.jsx',state);
  return{
    user
  }
}

export default connect(mapStateToProps,null)(AddCustomer);
