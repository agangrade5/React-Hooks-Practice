import React, { useState, useTransition } from "react";

const names = Array.from({ length: 20000 }, (_, i) => `User ${i + 1}`);

const UserList = () => {
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState(names);
    const [isPending, startTransition] = useTransition();

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);

        // Non-urgent update wrapped in transition
        startTransition(() => {
            const filteredNames = names.filter((name) =>
                name.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(filteredNames);
        });
    };

    return (
        <div>
            <h2>Users ({filtered.length})</h2>
            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search user..."
            />
            {isPending && <p>Loading results...</p>}
            <ul>
                {filtered.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
