import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='lg:pl-0 pl-16'>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-semibold'>About</h1>
                <button className='btn btn-primary mx-10'>Edit</button>
            </div>
            <div className='py-4 space-y-6'>
                <p><strong>Name:</strong> {user?.displayName}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>University:</strong></p>
                <p><strong>Address:</strong></p>
            </div>
        </div>
    );
};

export default About;