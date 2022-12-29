import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import TopPosts from './TopPosts';

const Home = () => {

    const { user } = useContext(AuthContext);



    const handlePost = e => {
        e.preventDefault();
        const form = e.target;
        const post = form.post.value;
        const img = form.img.files[0];
        const imageHostKey = process.env.REACT_APP_imgbb_key;
        console.log(imageHostKey);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: img
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const postData = {
                        caption: post,
                        image: imgData.data.url,
                        userName: user?.email
                    }
                    fetch('http://localhost:5000/posts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                        })
                }
            })
    }

    return (
        <div className='ml-8 py-10'>
            <form onSubmit={handlePost} className='flex flex-col space-y-3'>
                <input name='post' type="text" placeholder="Write your thought" className="input input-bordered input-lg w-full max-w-lg" />
                <input name='img' type="file" className="file-input file-input-bordered file-input-primary w-full max-w-lg" />
                <input className='btn btn-primary max-w-lg' type="submit" value="Submit" />
            </form>
            <TopPosts />
        </div>
    );
};

export default Home;