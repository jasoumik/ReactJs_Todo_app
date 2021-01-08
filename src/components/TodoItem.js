import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
   getStyle=()=>{
    return{
        background:'#f4f4f4',
        padding:'10px',
        borderBottom:'1px #ccc dotted',
        textDecoration:this.props.todo.completed?
        'line-through':'none'
    }
   }
//    markComplete=(e)=>{
//    console.log(this.props)
//    }
    render() {
        const {id,title }=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <h1>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                    <button onClick={this.props.delete.bind(this,id)} style={btnStyle}> x </button>
                    </h1>
            </div>
        )
    }
}
TodoItem.propTypes={
    todo: PropTypes.object.isRequired
}
const btnStyle ={
    background:'#ff0000',
    color:'#fff',
    cursor:'pointer',
    border:'none',
    padding:'5px 9px',
    borderRadius:'80%',
    float:'right'
}
export default TodoItem
