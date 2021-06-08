import React, { useEffect, useState } from 'react';
import axios from 'axios'

function DataFetching(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    /*
    Remember to inlude an empty array to useEffect as a dependency  
    */
    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    );
}

export default DataFetching;

/*
 For making mock/example api fetch calls. 
 https://jsonplaceholder.typicode.com/
 https://jsonplaceholder.typicode.com/posts

*/