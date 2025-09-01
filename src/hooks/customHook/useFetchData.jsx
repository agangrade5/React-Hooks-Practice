import { useState, useEffect } from 'react'

const useFetchData = (url) => {
    console.log(useEffect);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const postsData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        postsData();
    }, [url]);

    return [posts, loading, error];
};

export default useFetchData