import React, { useState, useMemo } from 'react'

const Cart = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'applec', price: 1000 },
        { id: 2, name: 'banana', price: 2000 },
        { id: 3, name: 'orange', price: 3000 },
        { id: 4, name: 'grape', price: 4000 },
        { id: 5, name: 'kiwicc', price: 50000 }
    ])
    const [discount, setDiscount] = useState(0)
    const [dark, setDark] = useState(false);
    
    /* const totalPrice = cart.reduce((total, item) => {
        console.log("Calculating...");
        return total + item.price
    }, 0) */

    const memoizedTotalPrice = useMemo(() => {
        console.log("Calculating useMemo...");
        
        return cart.reduce((total, item) => {
            console.log("Calculating useMemo...");
            return total + item.price
        }, 0)
    }, [cart])

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    };

    return (
        <div style={theme}>
            <div>Cart</div>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            {/* <div>Total price: {totalPrice}</div> */}
            <div>Memoized total price: {memoizedTotalPrice}</div>

            <button onClick={() => setDiscount(discount + 10)}>Increase discount</button>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        </div>
    )
}

export default Cart