import React, { Component } from 'react';
import uuid from 'uuid';
import ProjectsItem from './ProjectItem';


class AddProjects extends Component {

  constructor(){
    super();
    this.state ={
      newProject:{}
    }
  }
static defaultProps = {
  categories:["web design", "mobile development", "api development"]
}

handleSubmit(e){
  e.preventDefault();
  if(this.refs.title.value===''){
    alert('Title is required');
  }else{
    this.setState({newProject:{
      id:uuid.v4(),
      title: this.refs.title.value,
      category:this.refs.category.value
    }},function(){
    //  console.log(this.state);
    this.props.addProject(this.state.newProject);
    });
  }
//  alert('submitted');
}


  render() {
    let categoryoptions=this.props.categories.map(category=>{
      return  <option key={category} value={category}>{category}</option>
    });


    return (
      <div className="Projects">
    <h3>  Add Projects </h3>
    <form onSubmit={this.handleSubmit.bind(this)}>
     <div>
    <label> Title </label><br />
    <input type="text" ref= "title" />
    </div>
    <div>
        <label> Category </label><br />
        <select ref="category">
        {categoryoptions}


        </select>
        </div>
        <input type="submit" value="Submit" />
    </form>
      </div>
    );
  }
}

export default AddProjects;
