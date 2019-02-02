import React, {Component} from 'react';
import React,{Component} from 'react-redux';
import {projectRef} from '../firebase';
import {setProjects} from '../actions';
import ProjectItem from './ProjectItem';

class ProjectList extends Component{
  componentDidMount(){
    projectRef.on('value', snap=>{
      let projects=[];
      snap.forEach(project=>{

        const {email,title}=project.val;
        console.log('projectObject',projectObject);
        projects.push({email,title});
      })
      console.log('projects',projects);
      this.props.setProjects(Projects);
    })
  }
  render(){
    console.log('this.props.projects',this.props.projects);
    return(
      <div>{
        this.props.projects.map(project,index)=>{
          return{

            <ProjectItem key ={index} project={project} />
          }
        })
      }
      </div>
    )
  }
}
function mapStateToProps(state){
  const {projects}=state;
  return{
    projects
  }
}

export default connect(null,{setProjects})(ProjectList);
