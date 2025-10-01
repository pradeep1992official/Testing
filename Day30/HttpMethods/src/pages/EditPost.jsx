import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditPost() {
  const {id} = useParams();
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setBody(response.data.body);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  }, []);

  const handleSubmit = async () => {
    await axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title,
        body
      })
      .then((response) => {
        console.log("The post is updated", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("The error is : ", error);
      });
  };
  return (
    <div>
      <h1 className="text-2xl text-center mt-2 font-semibold">
        Edit Post
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
          Update Post
        </button>
      </div>
    </div>
  );
}

export default EditPost;
