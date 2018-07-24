import React, { Component } from 'react';


class TodoItem extends Component {
  deleteTodo (id){
    this.props.onDel(id);
  }
  render() {
    //console.log(this.props);
    return (
      <li className="ProjectsItem" >
      {this.props.todo.title} - {this.props.todo.completed} -
      <button onClick={ this.deleteTodo.bind(this, this.props.todo.id) }>Complete</button>
      </li>
    );
  }
}

export default TodoItem;
