import React, { Component } from 'react';
import TodoItem from './TodoItem';


class Todos extends Component {
  deleteTodo(id){
  this.props.onDel(id);
}
  render() {
    let todoitems;
    if(this.props.todos){
      todoitems = this.props.todos.map(todo=>{
        return(
          <TodoItem key={todo.id} onDel={this.deleteTodo.bind(this)} todo={todo}/>
    );
  });
    }

    //console.log(this.props);
    return (
      <div className="Projects">
      {todoitems}
      </div>
    );
  }
}

export default Todos;
