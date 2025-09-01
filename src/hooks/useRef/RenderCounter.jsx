import React, { useRef, useState, useEffect } from "react";

const RenderCounter = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
    });

    return (
        <div>
            <h2>Render Counter</h2>
            <p>Count: {count}</p>
            <p>Component rendered: {renderCount.current} times</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default RenderCounter;
