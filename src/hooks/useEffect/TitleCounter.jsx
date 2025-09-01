import React, { useState, useEffect } from 'react'

const TitleCounter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect is running ...')
        document.title = `You clicked ${count} times`
    }, [count]) // dependency array

    return (
        <div>
            <span>Counter {count}</span>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}

export default TitleCounter