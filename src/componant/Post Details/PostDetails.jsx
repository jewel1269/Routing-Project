import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();

    const navigate = useNavigate()
    const { id, title, body } = post;


    const handleGoBack = () => {
        navigate(-1)
    }
    return (

        <div className='text-2xl'>
            <h3 className='text-3xl'>ID: {id}</h3>
            <h3><span className='text-3xl  font-bold'>Post details about</span>: {title}</h3>
            <p><span className='text-3xl  font-bold'>Body</span>: {body}</p>
            <br />
            <button className='btn' onClick={handleGoBack}>Go back</button>
        </div>

    );
};

export default PostDetails;