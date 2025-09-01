import React, { useReducer, useState } from "react";

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: Date.now(), title: action.payload }];
        case "EDIT":
            return state.map((todo) =>
                todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
            );
        case "DELETE":
            return state.filter((todo) => todo.id !== action.payload);
        default:
        return state;
    }
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const [title, setTitle] = useState("");

    const handleAdd = () => {
        if (title.trim() === "") return;
        dispatch({ type: "ADD", payload: title });
        setTitle("");
    };

    return (
        <div>
            <h2>Todo App (useReducer)</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter todo"
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.title}{" "}
                    <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
