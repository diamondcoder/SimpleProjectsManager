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
        <button onClick={ this.deleteProject.bind(this,this.props.project.id) } > del</button>
      </li>
    );
  }
}

export default ProjectsItem;
