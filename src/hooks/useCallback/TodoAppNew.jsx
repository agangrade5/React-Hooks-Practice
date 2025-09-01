import React, { useState, useCallback, useMemo } from "react";

// Memoized child (renders only when props change)
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

const TodoAppNew = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn React", done: false },
        { id: 2, title: "Use Hooks", done: true },
        { id: 3, title: "Build a Todo App", done: false }
    ]);

    // Memoize toggleTodo function
    const toggleTodo = useCallback((id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    }, []);

    // Memoize derived value
    const completedCount = useMemo(() => {
        console.log("Calculating completed todos...");
        return todos.filter((todo) => todo.done).length;
    }, [todos]);

    return (
        <div>
            <h2>Todo App (Optimized)</h2>
            <p>
                Completed: {completedCount} / {todos.length}
            </p>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoAppNew;
