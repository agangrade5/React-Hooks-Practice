import React, { useState, useMemo } from "react";

const UserList = () => {
    const [search, setSearch] = useState("");
    const users = ["Amit", "Neha", "Rahul", "Sita", "John", "Ravi"];

    const filteredUsers = useMemo(() => {
        console.log("Filtering...");
        return users.filter((user) => 
            user.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div>
            <h2>User List</h2>
            <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredUsers.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
