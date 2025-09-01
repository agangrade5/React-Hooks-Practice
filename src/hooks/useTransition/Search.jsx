import React, { useState, useTransition } from 'react'

const Search = () => {
    const [search, setSearch] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleSearch = (e) => {
        console.log(e.target.value);
        startTransition(() => {
            setSearch(e.target.value);
        })
        console.log(search);
    }

    return (
        <>
            <div>Search</div>
            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search..."
            />
            {isPending && <p>Loading results...</p>}
        </>
    )
}

export default Search