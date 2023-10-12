import React, { useState, useEffect } from 'react';

const CommentList = ({ comments, spoonacularId }) => {
  const userComments = comments.filter(comment => comment.recipeId === spoonacularId);

  return (
    <div>
      <h3>Comments</h3>
      {userComments.length === 0 ? (
        <p>Your the first to comment on this recipe!</p>
      ) : (
        <ul>
          {userComments.map(comment => (
            <li key={comment.recipe.id}>
              {comment.text}
              {comment.user.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
