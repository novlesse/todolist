import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data.slice(0, 10)));
  }, [data]);

  return (
    <div className="container">
      <h2>Titles</h2>
      <div>
        {data.map((post) => (
          <div className="card mb-2" key={post.id}>
            <div className="m-3">{post.id}: {post.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;
