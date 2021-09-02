import React from 'react'
import {ListGroup,ListGroupItem } from 'reactstrap'
import {FaCheckDouble} from 'react-icons/fa'

import { connect } from 'react-redux'
import { removeTodo } from '../action/todo'

const Todo = ({todos,markComplete})=> {

    const handleRemove = id => {
        let todos = []
        if(typeof window != undefined){
            if(localStorage.getItem("todos")){
                todos = JSON.parse(localStorage.getItem("todos"))
            }
            todos.map((todoItem,index)=>{
                if(todoItem.id === id){
                    todos.splice(index,1)
                }
            })
            localStorage.setItem('todos',JSON.stringify(todos))
        }

        markComplete(id)
    }

    return (
        <ListGroup className="mt-5 mb-2">
            {
                todos.map((todo,index)=>(
                    <ListGroupItem key={todo.id} className="listgroupItem">
                        {index+1}.<span className="todoItem">{todo.title}</span>
                        <br />
                        <span className="created">{todo.date.dayName} {todo.date.hours}:{todo.date.minutes}{todo.date.ampm}</span>
                        <span
                        onClick = {e=> handleRemove(todo.id)}
                        className="float-right">
                            <FaCheckDouble />
                        </span>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    markComplete: id => {
        dispatch(removeTodo(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Todo)