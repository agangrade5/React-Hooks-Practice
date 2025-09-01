import React, { useState, useMemo } from "react";

const TodoApp = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn React", done: false },
        { id: 2, title: "Practice Hooks", done: true },
    ]);

    const completedCount = useMemo(() => {
        //console.log("Calculating completed todos..." + todos.filter((todo) => todo.done).length);
        return todos.filter((todo) => todo.done).length;
    }, [todos]);

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => {
                //console.log(todo.id === id ? !todo.done : todo);
                return todo.id === id ? { ...todo, done: !todo.done } : todo;
            })
        );
    };

    return (
        <div>
            <h2>Todo App</h2>
            <p>Completed: {completedCount}</p>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
