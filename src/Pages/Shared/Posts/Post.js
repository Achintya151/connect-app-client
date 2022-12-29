import React, { useState } from 'react';
import { MdInsertEmoticon, MdOutlineComment, MdOutlineDetails } from 'react-icons/md';

const Post = ({ post }) => {
    const [reactCount, setReactCount] = useState(0);
    const [clicked, setClicked] = useState(false);
    const incrementReactCount = () => {
        if (clicked === true) {
            setReactCount(reactCount - 1);
            setClicked(false);
        }
        else {
            setReactCount(reactCount + 1);
            setClicked(true);
        }
    }

    return (
        <div className="card card-compact w-full max-w-xl bg-base-100 shadow-xl my-10">
            <figure><img src={post.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{post.caption}</h2>
                <p>{reactCount} Reacts & {post.numberOfComment} comments</p>
                <div className='card-actions justify-evenly'>
                    <button onClick={incrementReactCount} className="btn btn-ghost text-4xl"><MdInsertEmoticon /> <small className='text-sm pl-2'>React</small></button>

                    <button className="btn btn-ghost text-4xl"><MdOutlineDetails /> <small className='text-sm pl-2'>Details</small></button>
                </div>
                <form>
                    <div className='flex justify-center my-4'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input className="btn btn-outline" type="submit" value="Comment" />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Post;