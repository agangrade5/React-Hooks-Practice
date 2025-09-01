import React from 'react'
import { capitalizeFirstLetter, shortTitle, shortDescription } from './data'

const PostList = ({ postsList, isLoading }) => {
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {postsList.length > 0 ? postsList.map((post) => {
                return (
                    <div className="col-12 col-sm-6 col-lg-4 portfolio-item" data-category="web design" key={post.id}>
                        <div className="card portfolio-card h-100">
                            <img className="portfolio-thumb" src={post.image} alt={post.title} />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <h5 className="card-title mb-1">{shortTitle(post.title)}</h5>
                                    </div>
                                </div>
                                <p className="card-text">{shortDescription(post.description)}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <b>{capitalizeFirstLetter(post.category)}</b>
                                    </div>
                                    <small className="text-muted">{post.createdAt}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : <p>No Posts Found</p>}
        </>
    )
}

export default PostList