import React from 'react'
import posts from './posts.json'

const PostList = () => {
    return (
        <div>
            {posts.map((post, index) => (
                <div key={index} style={{marginBottom: '20px'}}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList