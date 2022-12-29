import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Shared/Posts/Post';

const Media = () => {
    const posts = useLoaderData();
    return (
        <div className='lg:mx-0 mx-auto'>
            {
                posts.map(post => <Post
                    key={post._id}
                    post={post}></Post>)
            }

        </div>
    );
};

export default Media;