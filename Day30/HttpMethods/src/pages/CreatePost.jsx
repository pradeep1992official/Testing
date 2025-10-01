import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function CreatePost() {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1,
      })
      .then((response) => {
        console.log("The post is created", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("The error is : ", error);
      });
  };
  return (
    <div>
      <h1 className="text-2xl text-center mt-2 font-semibold">
        Create a New Post
      </h1>
      <div className="mt-4">
        <input
          type="text"
          className="bg-white w-full rounded-md shadow-md p-2 border"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          placeholder="Body"
          className="bg-white w-full rounded-md shadow-md p-2 border mt-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
