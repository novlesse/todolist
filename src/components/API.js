import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data.slice(0, 3)));
  }, [data]);

  return (
    <div className="container">
      <h2 className="mb-3">Posts</h2>
      <div>
        {data.map((post) => (
          <div className="card mb-2" key={post.id}>
            <div className="m-3">
              <b>Post ID: </b>
              {post.id}
            </div>
            <div className="m-3">
              <b>Title: </b>
              {post.title}
            </div>
            <div className="m-3">{post.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;
