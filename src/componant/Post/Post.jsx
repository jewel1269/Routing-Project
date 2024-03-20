import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PostDetails from "../Post Details/PostDetails";

const Post = ({ post }) => {

    const navigate = useNavigate();
    const { id, title } = post;

    const handleClick = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="border-2 shadow-2xl p-4 bg-orange-200 rounded-2xl">
            <h1>Post of id: {id}</h1>
            <h1>Title: {title}</h1>
            <Link to={`/post/${id}`}><button className="btn btn-active btn-sm">Post Detail</button></Link>
            <button onClick={handleClick} className="btn ">Click me</button>

        </div>
    );
};

export default Post;
