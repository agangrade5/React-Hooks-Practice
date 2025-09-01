import React, { useState, useDeferredValue } from "react";

const names = Array.from({ length: 20000 }, (_, i) => `User ${i + 1}`);

const UserList = () => {
    const [search, setSearch] = useState("");

    // Defer the search value
    const deferredSearch = useDeferredValue(search);

    const filtered = names.filter((name) =>
        name.toLowerCase().includes(deferredSearch.toLowerCase())
    );

    return (
        <div>
            <h2>Users ({filtered.length})</h2>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search user..."
            />
            <ul>
                {filtered.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
