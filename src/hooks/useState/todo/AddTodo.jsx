import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleAddTodo = () => {
        if (title.trim() === '') return
        addTodo(title)
        setTitle('')
    }

    return (
        <div>
            <span>Add Todo</span>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
}

export default AddTodo