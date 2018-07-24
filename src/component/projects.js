import React, { Component } from 'react';
import ProjectsItem from './ProjectItem';


class Projects extends Component {
  deleteProject(id){
  this.props.onDelete(id);
  }
  render() {
    let projectitems;
    if(this.props.projects){
      projectitems = this.props.projects.map(project=>{
        return(
          <ProjectsItem key={project.id} onDelete={this.deleteProject.bind(this)} project={project}/>
    );
  });
    }

    //console.log(this.props);
    return (
      <div className="Projects">
      {projectitems}
      </div>
    );
  }
}

export default Projects;
