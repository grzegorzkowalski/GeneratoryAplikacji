import {useEffect, useState} from "react";
import SinglePost from "./SinglePost.jsx";
import {getPosts} from "../api/travel-api.js";
import {Link} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(setPosts);
    }, []);

    if (!posts.length) {
        return (
            <div>
                <h1>Testujemy wp backend</h1>
            </div>
        );
    } else {
        return (
            <>
                <ul>
                    {
                        posts.map(el => <li key={el.id}><Link to={`/posts/${el.id}`}>{el.title.rendered}</Link></li>)
                    }
                </ul>
            </>
        )
    }

};

export default Posts;
