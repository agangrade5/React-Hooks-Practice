import React, { useState, useEffect, useLayoutEffect } from 'react'

const LayoutExample = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect called after paint")
    })

    useLayoutEffect(() => {
        console.log("useLayoutEffect called before paint")
    })

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default LayoutExample
