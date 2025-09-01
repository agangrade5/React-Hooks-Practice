import React, { useState, useCallback, memo } from "react";

const Child = memo(({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Click Child</button>;
});

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Child button clicked!");
    }, []); // no dependencies → function is stable

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child onClick={handleClick} />
        </div>
    );
};

export default Parent;
