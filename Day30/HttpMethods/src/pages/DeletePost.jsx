import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DeletePost() {
  const { id } = useParams();
  // const [title, setTitle] = useState([]);
  // const [body, setBody] = useState([]);
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  }, []);

  const handleSubmit = async () => {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log("The post is deleted");
        navigate("/");
      })
      .catch((error) => {
        console.log("The error is : ", error);
      });
  };
  return (
    <div>
      <div className="space-y-4 mt-4">
        <div key={post.id} className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semobold">{post.title}</h3>
          <p className="text-gray-600">{post.body}</p>
        </div>

              <button
        className="bg-red-500 text-white p-2 rounded-md shadow-md"
        onClick={handleSubmit}
      >
        Confirm?
      </button>
      </div>

    </div>
  );
}

export default DeletePost;
