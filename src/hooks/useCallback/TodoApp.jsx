import React, { useState, useCallback } from "react";

const TodoItem = React.memo(({ todo, toggleTodo }) => {
    console.log("Rendering:", todo.title);
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
            />
            {todo.title}
        </li>
    );
});

const TodoApp = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn React", done: false },
        { id: 2, title: "Use Hooks", done: false }
    ]);

    const toggleTodo = useCallback((id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    }, []);

    return (
        <div>
            <h2>Todo App (useCallback)</h2>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
