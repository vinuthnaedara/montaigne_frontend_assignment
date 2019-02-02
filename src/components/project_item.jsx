import React,{Componnet} from 'react';
import {completeProjectRef} fromo '../firebase';

  class ProjectItem extends Component{
    completeProject(){

    }
    render(){
      console.log('this.props.project',this.props.project);
      const {email,title}=this.props.project;
      return(
        <div style={{margin: '5px'}}>
<strong>{title}</strong>
<span style={{marginRight: '5px'}}>submitted by<em>{email}</em></span>
<button
className="btn btn-sm btn-primary "
>
know customer
</button>
        </div>
      )
    }
  }

  export default ProjectItem;
