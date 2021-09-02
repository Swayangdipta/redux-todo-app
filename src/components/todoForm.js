import React, {useState,useEffect} from 'react'
import { v4 } from 'uuid'
// Redux
import {connect} from 'react-redux'
import {addTodo} from '../action/todo'

import {
    Container,
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap'

import {FaArrowRight} from 'react-icons/all'


const TodoForm = ({addTodo}) => {
    const [title,setTitle] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault();
        if(title === ''){
            return alert('Please Add something')
        }

        var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        var date = new Date();
        var days = date.getDay()
        var dayName = weekdays[days]
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let creationDate = {
            hours,
            minutes,
            ampm,
            dayName
        }

        const todo = {
            title,
            id: v4(),
            date: creationDate
        }

        let todos = []

        if(typeof window != undefined){
            if(localStorage.getItem("todos")){
                todos = JSON.parse(localStorage.getItem("todos"))
            }
            todos.push({...todo})
            localStorage.setItem('todos',JSON.stringify(todos))
        }

        addTodo(todo)

        setTitle("")
    }

    useEffect(() => {
        let todos = []
        if(typeof window != undefined){
            if(localStorage.getItem("todos")){
                todos = JSON.parse(localStorage.getItem("todos"))
            }
        }

        if(todos.length > 0){
            todos.forEach(element => {
                addTodo(element)
            });
        }
    }, [])
    
    
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your next todo..."
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                    />
                    <InputGroupAddon>
                        <Button color="primary addon" onClick={handleSubmit}><FaArrowRight/></Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    addTodo: todo => {
        dispatch(addTodo(todo))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)