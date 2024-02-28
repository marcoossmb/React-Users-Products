import React from 'react'

const CardPost = ({ post }) => {
    return (
        <div className='m-4 border border-secondary rounded p-2'>
            <p className="fs-5 fw-bold">{post.title}</p>
            <p>{post.body}</p>
            <hr></hr>
            <div className='d-flex justify-content-end'>
                {post.tags && post.tags.map((tag) => (
                    <p className="text-secondary badge">{tag}</p>
                ))}
            </div>
        </div>
    )
}

export default CardPost