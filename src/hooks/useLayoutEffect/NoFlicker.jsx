import React, { useLayoutEffect, useState } from 'react'

const NoFlicker = () => {
    const [message, setMessage] = useState('Loading...')

    useLayoutEffect(() => {
        // Heavy calculation or DOM adjustment
        for (let i = 0; i < 100000000; i++) {} // simulate blocking work
        setMessage('Data Loaded ✅')
    }, [])

    return <h2>{message}</h2>
}

export default NoFlicker
