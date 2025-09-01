import React, { useState } from "react";

const Child = ({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Click Child</button>;
};

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log("Child button clicked!");
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child onClick={handleClick} />
        </div>
    );
};

export default Parent;
