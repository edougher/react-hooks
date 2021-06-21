import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching(props) {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromClick, setIdFromClick] = useState(1);

  const handleClick = () => {
    setIdFromClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromClick]);

  /*
    Remember to inlude an empty array to useEffect as a dependency  
    */

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        value={id}
      ></input>
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
    </div>
  );
}

export default DataFetching;

/*
 For making mock/example api fetch calls. 
 https://jsonplaceholder.typicode.com/
 https://jsonplaceholder.typicode.com/posts

*/
