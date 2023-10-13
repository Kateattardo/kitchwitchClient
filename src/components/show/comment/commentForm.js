import React, { useState } from 'react';

const CommentForm = ({ recipeId, onCommentSubmit }) => {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(commentText, recipeId);
    setCommentText(''); 
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <textarea 
        value={commentText} 
        onChange={(e) => setCommentText(e.target.value)} 
        placeholder="Add a comment..."
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
