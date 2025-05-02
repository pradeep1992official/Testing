import React from "react";

function Post(props) {
  return (
    <>
      <h2>{props.name + " | " + props.venue + " | " + props.date}</h2>
      <hr />
      <button>Like</button>
      <button>Comment</button>
      <button>Share</button>
      <hr />
      <br />
    </>
  );
}

export default Post;
