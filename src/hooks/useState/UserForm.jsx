import React, { useState } from 'react'

const UserForm = () => {
    const [userData, setUserData] = useState({
        first_name: 'fistName',
        last_name: 'lastName'
    })

    const handleUserData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <div>UserForm</div>
            <input type="text" placeholder='Name' name='first_name' id="first_name" value={userData.first_name} onChange={handleUserData} /> 
            <br />
            <input type="text" placeholder='Last Name' name='last_name' id="last_name" value={userData.last_name} onChange={handleUserData} />
            <br />
            <p>Name: {userData.first_name} {userData.last_name}</p>
        </>
    )
}

export default UserForm