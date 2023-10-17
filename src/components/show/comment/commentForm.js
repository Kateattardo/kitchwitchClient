import React, { useState } from "react";

const CommentForm = ({ onCommentSubmit, id }) => {
  const [commentText, setCommentText] = useState("");
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(commentText, id);
    setCommentText("");
  };

  return (
    <form onSubmit={handleCommentSubmit} className="d-flex align-items-center">
      <input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
        className="form-control me-3"
      />
      <button className="btn btn-primary" type="submit">
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
