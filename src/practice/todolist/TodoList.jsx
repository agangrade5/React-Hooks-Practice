import React, { useEffect, useRef, useState } from "react";

const getTodoList = () => {
    if (localStorage.getItem("todoList")) {
        return JSON.parse(localStorage.getItem("todoList"));
    } else {
        return [];
    }
}

const TodoList = () => {
    const [title, setTitle] = useState('');
    const [todoList, setTodoList] = useState(getTodoList());

    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState('');

    const addInputRef = useRef(null);
    const editInputRef = useRef(null);

    const addTitle = (e) => {
        e.preventDefault();

        if (title.trim() === '') return;

        setTodoList(
            [...todoList, { id: todoList.length + 1,  title: title }]
        );
        setTitle('')
        addInputRef.current.focus();
    }

    const editRow = (todo) => {
        setEditId(todo.id)
        setEditTitle(todo.title)
        setTimeout(() => {
            editInputRef.current.focus();
        }, 0);
    }

    const updateRow = (id) => {
        const updateData = todoList.map((todo) => 
            todo.id === id ? { ...todo, title: editTitle } : todo
        )
        setTodoList(updateData);
        setEditId(null);
        setEditTitle('')
    }

    const deleteRow = (id) => {
        const removeTodo = todoList.filter((todo) => {
            return todo.id !== id;
        })
        setTodoList(removeTodo)
    }

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList])

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg rounded-3">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Todo List</h2>

                            {/* Add Task */}
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Add new task"
                                    value={title}
                                    ref={addInputRef}
                                    onChange={(e) => {setTitle(e.target.value); setEditId(null);}}
                                    onFocus={() => {setEditId(null)}}
                                />
                                <button 
                                    type="submit" 
                                    className="btn btn-outline-primary btn-sm"
                                    onClick={addTitle}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                        </svg>
                                </button>
                            </div>

                            {/* Task List */}
                            <ul className="list-group">
                                { 
                                    todoList.length > 0 ? 
                                    todoList.map((todo) => {
                                        const isEdit = todo.id===editId;
                                        return (
                                            <li 
                                                key={todo.id} 
                                                className="list-group-item d-flex justify-content-between align-items-center"
                                            >
                                                { isEdit ? 
                                                    (
                                                        <div className="d-flex w-100 align-items-center">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                style={{ maxWidth: "92%" }}
                                                                value={editTitle}
                                                                onChange={(e) => setEditTitle(e.target.value)}
                                                                ref={editInputRef}
                                                            />
                                                            <div className="btn-group">
                                                                <button title="Update" className="btn btn-outline-success btn-sm" onClick={() => updateRow(todo.id)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-floppy-fill" viewBox="0 0 16 16">
                                                                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z"/>
                                                                        <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z"/>
                                                                    </svg>
                                                                </button>
                                                                <button title="Cancel" className="btn btn-outline-danger btn-sm" onClick={() => setEditId(null)}>   
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                :
                                                    <>
                                                        <span>{todo.title}</span>
                                                        <div className="btn-group">
                                                            <button title="Edit" className="btn btn-outline-secondary btn-sm" onClick={() => editRow(todo)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                                                                </svg>
                                                            </button>
                                                            <button title="Delete" className="btn btn-outline-danger btn-sm" onClick={() => deleteRow(todo.id)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </> 
                                                }
                                                
                                            </li>
                                        )
                                    })
                                    :
                                    <li className="list-group-item text-center text-muted">No tasks yet</li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
