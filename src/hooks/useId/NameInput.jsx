import React, { useId } from "react";

const NameInput = () => {
    const id = useId();
    const id2 = useId();
    console.log(id);
    return (
        <div>
            <label htmlFor={id}>Name:</label>
            <input id={id} type="text" placeholder="Enter your name" />

            <label htmlFor={id2}>Name:</label>
            <input id={id2} type="text" placeholder="Enter your name 2" />
        </div>
    );
};

export default NameInput;
