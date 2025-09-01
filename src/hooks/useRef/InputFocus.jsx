import React, { useRef } from "react";

const InputFocus = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus(); // focus the input
    };

    return (
        <div>
            <h2>useRef Example</h2>
            <input ref={inputRef} type="text" placeholder="Type here..." />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
};

export default InputFocus;
