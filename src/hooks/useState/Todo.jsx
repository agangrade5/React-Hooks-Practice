import React, { useState } from 'react'
import AddTodo from './todo/AddTodo'
import ListTodo from './todo/ListTodo'

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Todo 1' },
        { id: 2, title: 'Todo 2' },
        { id: 3, title: 'Todo 3' },
    ])

    const addTodo = (newTitle) => {
        setTodos(
            [
                ...todos,
                { id: todos.length + 1, title: newTitle }
            ]
        )
    }

    const editTodo = (id, newTitle) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? { ...todo, title: newTitle } : todo
            )
        )
    }

    const deleteTodo = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }   

    return (
        <>
            <div>Todo</div>
            <hr />
            <AddTodo addTodo={addTodo} />
            <hr />
            <ListTodo todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
        </>
    )
}

export default Todo