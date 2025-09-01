import React, { useState, useMemo } from "react";

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  //const expensiveValue = useMemo(() => {
        console.log("Calculating...");
        let total = 0;
        for (let i = 0; i < 10; i++) { // heavy loop
            console.log("Running...");
            total += i;
        }
        console.log("Total:", total);
        console.log("Count:", count);
        return total + count;
    }, [count]);

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    };

    return (
        <div style={theme}>
            <h2>Expensive Calculation</h2>
            <p>Value: {expensiveValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </div>
    );
};

export default ExpensiveCalculation;
