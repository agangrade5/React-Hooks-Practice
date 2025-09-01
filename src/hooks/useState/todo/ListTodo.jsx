import React, { useState } from 'react'

const ListTodo = ({ todos, editTodo, deleteTodo }) => {
    const [editId, setEditId] = useState(null)
    const [editTitle, setEditTitle] = useState('')

    const handleUpdateTodo = (todo) => {
        setEditId(todo.id)
        setEditTitle(todo.title)
    }

    const handleSaveTodo = (id) => {
        editTodo(id, editTitle)
        setEditId(null)
        setEditTitle('')
    }

    return (
        <div>
            <span>List Todo</span>
            <ul>
                { todos && todos.map((todo) => {
                    const isEdit = editId === todo.id
                    return (
                        <li key={todo.id}>
                            { isEdit ? (
                                <>
                                    <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                                    <button onClick={() => handleSaveTodo(todo.id)}>Save</button>
                                    <button onClick={() => setEditId(null)}>Cancel</button>
                                </>
                                ) : (
                                <>
                                    <span>{todo.title}</span>
                                    <button onClick={() => handleUpdateTodo(todo)}>Edit</button>
                                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                </>
                                )
                            }
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default ListTodo