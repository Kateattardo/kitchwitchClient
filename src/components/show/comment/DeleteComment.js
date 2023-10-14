import React from "react";

const DeleteComment = ({ commentId, onDeleteComment }) => {
  const handleDelete = () => {
    // const commentUrl = `http://localhost:8000/comment/${id}`
    onDeleteComment(commentId);
  };

  return (
    <div className="comment">
      <p>{commentId}</p>
      <button onClick={handleDelete}>DeleteComment</button>
    </div>
  );
};

export default DeleteComment;
