import React, { Component } from 'react';


class ProjectsItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    //console.log(this.props);
    return (
      <li className="ProjectsItem">
      {this.props.project.title} - {this.props.project.category}
      <a href="#" onClick={ this.deleteProject.bind(this,this.props.project.id) } > X </a>
      </li>
    );
  }
}

export default ProjectsItem;
