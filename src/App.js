import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './component/projects';
import AddProjects from './component/addProject';
import Todos from './component/todoList';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={projects: [] }
        this.state={todos: [] }
  }

  componentWillMount(){
  this.getProjects();
  this.getTodos();
  }
  componentDidMount(){

  }
  getTodos(){
  /*  $.ajax({
        url: 'http://45.33.127.148:8080/optimum/rest/v1/region',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: "json",
        xhrFields:
        {
            withCredentials: true
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Basic YWRtaW46YWRtaW4=');// + btoa(username + ":" + password));
        },
        success: function (data) {
           console.log(data);

          // $('#result').html(jsonData);
          this.setState({todos:data});
        }.bind(this),

       error: function (errorThrown) {
           //console.log(request.responseText);
           //console.log(textStatus);
           console.log(errorThrown);
       }
    });*/
  $.ajax({
    url:"https://jsonplaceholder.typicode.com/todos",
    dataType:'json',
    cache:false,
    success:function(data){
      console.log(data);
      this.setState({todos:data});
    }.bind(this),
    error:function(xhr,status, err){
      console.log(err);
    }
  });
  }
  getProjects(){
    this.setState({projects:[
      {
        id:uuid.v4(),
        title:'one',
        category:'books'
      },
      {
        id:uuid.v4(),
        title:'two',
        category:'food'
      },
      {
        id:uuid.v4(),
        title:'three',
        category:'books'
      },
      {
        id:uuid.v4(),
        title:'four',
        category:'food'
      }
    ]
  });
  }
  handleAddProject(project){
    //console.log(project);
    let projects=this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects =this.state.projects;
    let index=projects.findIndex(x=>x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  handleDeleteTodo(id){
    //alert("are you sure you want to delete this?"+ id);
    let todos= this.state.todos;
    let index=todos.findIndex(x=>x.id=== id);
    todos.splice(index,1);
    this.setState({todos:todos});
  }
  render() {
    return (
      <div className="App">

      My App
        <AddProjects addProject={this.handleAddProject.bind(this)}/>
          <h3>Projects</h3>

      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>

      <h3>Todos </h3>

      <Todos todos={this.state.todos} onDel={this.handleDeleteTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
