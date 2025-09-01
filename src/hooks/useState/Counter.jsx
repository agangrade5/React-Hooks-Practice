import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [isCounter, setIsCounter] = useState(false)
    const [textChange, setTextChange] = useState('increase')

    const [count, setCount] = useState(0)
    
    const increaseHandle = () => {
        setCounter(counter + 1);
        setIsCounter(true);
        setTextChange('increase')
    };

    const decreaseHandle = () => {
        setCounter(counter - 1);
        setIsCounter(true);
        setTextChange('decrease')
    };

    const increment = () => {
        setCount((a) => a + 1)
    };

    return (
        <div>
            <h1>Counter: { counter }</h1>
            { isCounter && <h2>The count is {textChange}</h2> }

            <button onClick={increaseHandle}>Increase</button>
            <button onClick={decreaseHandle}>Decrease</button>

            <hr />

            <button onClick={() => setCounter(counter + 1)}>Increase by 1</button>
            <button onClick={() => setCounter(counter - 1)}>Decrease by 1</button>

            <hr />

            <h1>Count: { count }</h1>
            <button onClick={() => { increment(); increment(); increment(); }}>Increase + 3</button>
            <button onClick={() => increment()}>Increase + 1</button>
        </div>
    )
}

export default Counter
