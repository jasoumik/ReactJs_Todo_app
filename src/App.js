//import logo from './logo.svg';
import Header from './components/layout/Header';
import { BrowserRouter as BR, Route} from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import React,{ Component } from 'react';
import {v4 as uuid} from "uuid";
import About from './components/pages/About';
import axios from 'axios';
class App extends Component{
  state={
    todos:[
      // {
      //   id:uuid(),
      //   title:'Take out of trash',
      //   completed:true
      // },
      // {
      //   id:uuid(),
      //   title:'Take out of trash 2',
      //   completed:false
      // },
      // {
      //   id:uuid(),
      //   title:'Take out of trash 3',
      //   completed:true
      // },
    ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }
  // toggle complete
markComplete = (id) =>{
 // console.log(id)
 this.setState({todos:this.state.todos.map(todo=>{
   if(todo.id===id){
    todo.completed=!todo.completed
   }
   return todo;
 })});
}
// delete todo
delete= (id) =>{
 // console.log(id);
 this.setState({todos:[...this.state.todos.filter(todo=>todo.id
  !==id)]});
}
//add Todo
addTodo=(title)=>{
  //console.log(title);
  const newTodo={
    id:uuid(),
    title,
    completed:false
  }
  this.setState({todos:[...this.state.todos,newTodo]});
}
  render(){
   // console.log(this.state.todos)
  return (
    <BR>
    <div className="App">
        
       <div className="Container">
      <Header  />
      <Route exact path="/" render={props=>(
        <React.Fragment>
         <AddTodo addTodo={this.addTodo}/>
     <Todo todos={this.state.todos} markComplete={this.markComplete} delete={this.delete}/>
    </React.Fragment>
      )}/>
     <Route path="/about" component={About} />
    </div>
      
    </div>
    </BR>
  ); 
  }  
}

export default App;
