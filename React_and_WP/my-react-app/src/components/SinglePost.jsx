import React, {useEffect, useState} from 'react';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import {getCategories, getPostById} from "../api/travel-api.js";

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(false);
    const [categories, setCategories] = useState(false);

    useEffect(() => {
        getPostById(id, setPost);
    }, []);

    useEffect(() => {
        getCategories(setCategories);
    }, [post]);
    const getCategoryName = (id) => {
        const {name} = categories.filter(el => el.id = id);
        return name;
    }

    if (!post || !categories) {
        return <h2>Loading...</h2>
    } else {
        return (
            <>
               <div>
                    <h1>{post.title.rendered}</h1>
                    <h4>{getCategoryName(post.id)}</h4>
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content.rendered)}}/>
                </div>
            </>
        );
    }
};

export default SinglePost;
