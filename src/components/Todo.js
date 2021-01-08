import TodoItem from './TodoItem';
import React,{ Component } from 'react';
import PropTypes from 'prop-types';
class Todo extends Component{
    render(){
      return this.props.todos.map((todo)=>(
    //<h3>{todo.title}</h3>
    <TodoItem key={todo.id} todo={todo}
    markComplete={this.props.markComplete} delete={this.props.delete}/>
      ));
    }
  
   
}
Todo.propTypes={
    todos: PropTypes.array.isRequired
}
export default Todo;