import React, {Component} from 'react';
import React,{Component} from 'react-redux';
import {customerRef} from '../firebase';
import {setCustomers} from '../actions';


class CustomerList extends Component{
  componentDidMount(){
    customerRef.on('value', snap=>{
      let customer=[];
      snap.forEach(customer=>{

        const {email,title}=customer.val;
        console.log('customerObject',customerObject);
        customerss.push({email,title});
      })
      console.log('customers',customers);
      this.props.setCustomers(Customers);
    })
  }
  render(){
    console.log('this.props.customers',this.props.customers);
    return(
      <div>{
        this.props.customers.map(customer,index)=>{
          return{

            <CustomerItem key ={index} customer={customer} />
          }
        })
      }
      </div>
    )
  }
}
function mapStateToProps(state){
  const {Customers}=state;
  return{
    customers
  }
}

export default connect(null,{setCustomers})(CustomerList);
