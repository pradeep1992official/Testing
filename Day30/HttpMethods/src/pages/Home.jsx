import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold">All Posts</h1>
      <div className="space-y-4 mt-4">
        {post.map((posts) => (
          <div key={posts.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semobold">{posts.title}</h3>
            <p className="text-gray-600">{posts.body}</p>
            <div className="mt-4 flex gap-2">
              <Link
                to={`edit/${posts.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Edit
              </Link>
              <Link
                to={`delete/${posts.id}`}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link
          to="/create"
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Create New Post
        </Link>
      </div>
    </div>
  );
}

export default Home;
