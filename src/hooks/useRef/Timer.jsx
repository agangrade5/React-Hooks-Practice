import React, { useRef, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (timerRef.current) return; // prevent multiple intervals
        timerRef.current = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    return (
        <div>
            <h2>Timer with useRef</h2>
            <p>Seconds: {seconds}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
};

export default Timer;
