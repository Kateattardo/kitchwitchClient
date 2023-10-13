import React, { useState } from 'react';
import CommentUpdateForm from './CommentUpdateForm';


const CommentForm = ({ comment, onDeleteComment, onUpdateComment, userToken }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [commentText, setCommentText] = useState('');

  return (
    <div>
      {!isEditing ? (
        <>
          <p>{commentText}</p>
          <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      ) : (
        <CommentUpdateForm
          commentId={comment.id}
          initialText={comment.text}
          onUpdateComment={(commentId, updatedText) => {
            onUpdateComment(commentId, updatedText);
            setIsEditing(false);
          }}
          userToken={userToken}
        />
      )}
    </div>
  );
};


// const CommentForm = ({ recipeId, onCommentSubmit }) => {
//   const [commentText, setCommentText] = useState('');

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     onCommentSubmit(commentText, recipeId);
//     setCommentText(''); 
//   };

//   return (
//     <form onSubmit={handleCommentSubmit}>
//       <textarea 
//         value={commentText} 
//         onChange={(e) => setCommentText(e.target.value)} 
//         placeholder="Add a comment..."
//       />
//       <button type="submit">Post Comment</button>
//     </form>
//   );
// };

export default CommentForm;
