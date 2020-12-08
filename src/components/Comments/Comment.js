// You do not need to change this file.
import React from "react";

const Comment = (props) => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  const { comment, id } = props;

  return (
    <div className="comment-text">
      <span className="user" key={id}>
        {comment.username}
      </span>{" "}
      <span className="comment" key={id}>
        {comment.text}
      </span>
    </div>
  );
};

export default Comment;
