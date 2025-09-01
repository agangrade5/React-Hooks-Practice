import React, { useState } from 'react'

import { postsData } from './data'
import PostList from './PostList';
import CategoryList from './CategoryList';

const Home = () => {
    const [postsList, setPostsList] = useState(postsData);

    const [activeClass, setActiveClass] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [currentSearchTitle, setCurrentSearchTitle] = useState('');
    const [currentCategory, setCurrentCategory] = useState('');

    const applyFilters = (category, query) => {
        const filterPostData = postsData.filter((post) => {
            // Search by category
            const matchesCategory = category ? post.category === category : true;
            // Search by title
            const matchesSearch = query ? post.title.toLowerCase().includes(query.toLowerCase().trim()) : true;

            return matchesCategory && matchesSearch;
        });
        setPostsList(filterPostData);
    };

    const handleCategory = (category) => {
        setCurrentCategory(category);
        setActiveClass(category);

        setIsLoading(true);
        setTimeout(() => {
            applyFilters(category, currentSearchTitle); // apply with current search
            setIsLoading(false);
        }, 1000);
    };

    const handleSearch = (searchQuery) => {
        setCurrentSearchTitle(searchQuery); // store user input as-is
 
        setIsLoading(true);
        setTimeout(() => {
            applyFilters(currentCategory, searchQuery); // apply with current category
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">

                <header className="py-5 bg-light border-bottom">
                    <div className="container">
                        <div className="row align-items-center g-3">
                            <div className="col-lg-8">
                                <h1 className="h2 mb-1">Portfolio Gallery</h1>
                                <p className="text-muted mb-0">Filter items by category and title using React JS.</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="input-group">
                                    <span className="input-group-text" id="search-label">Search</span>
                                    <input type="text" id="searchInput" className="form-control" placeholder="Type to filter by title…"
                                        aria-describedby="search-label" value={currentSearchTitle} onChange={(e) => handleSearch(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="py-4">
                    <div className="container">

                        <div className="d-flex flex-wrap gap-2 mb-4" role="toolbar" aria-label="Category filters">
                            <CategoryList handleCategory={handleCategory} activeClass={activeClass} />
                        </div>

                        <div className="row g-4">
                            <PostList postsList={postsList} isLoading={isLoading} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home