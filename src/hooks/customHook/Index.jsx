import React from 'react'
import useFetchData from './useFetchData'

const Index = () => {

    const [posts, loading, error] = useFetchData('https://jsonplaceholder.typicode.com/posts');

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <div>
            <h1>Fetch posts with custom hook</h1>
            <ul>
                {posts.length > 0 && posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Index