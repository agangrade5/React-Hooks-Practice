import React, { useReducer } from "react";

const init = 0;

const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return init;
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, init)
    return (
        <>
            <div>Reducer Counter</div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT"})}>Increament</button>
            <button onClick={() => dispatch({ type: "DECREMENT"})}>Decreament</button>
            <button onClick={() => dispatch({ type: "RESET"})}>Reset</button>
        </>
    )

}

export default Counter;


