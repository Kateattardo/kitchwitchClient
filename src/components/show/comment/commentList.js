import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CommentForm from './CommentForm';

const CommentList = ({ list, onDeleteComment, onUpdateComment, userToken }) => {
  console.log(list, 'show comments')
  return (
    <div>
      {list.map((comment) => (
        <CommentForm
          key={comment.id}
          comment={comment}
          onDeleteComment={onDeleteComment}
          onUpdateComment={onUpdateComment}
          userToken={userToken}
        />
      ))}
    </div>
  );
};




// const CommentList = ({ recipeId, userId, userToken }) => {
//   const [list, setList] = useState([])
//   useEffect(() => {
//     async function getList() {
//       const url = `http://localhost:8000/recipe/${recipeId}/comment`
//       const response = await axios.get(url)
//       setList(response.data.comment)
//     }
//     getList()
//   }, [])
//   const itemViews = (
//     list.map(comment => {
//       console.log('comment', comment.userId)
//       console.log('userId', userId)
//       const myComment = comment.userId._id === userId
//       console.log('myComment', myComment)
//       const updateForm = myComment && (
//         <>
//         <CommentUpdateForm
//           commentId={comment._id}
//           userToken={userToken}
//         />
//         <deleteComment
//           commentId={comment._id}
//           userToken={userToken}
//         />
//         </>
//       )
//       return (
//         <li key={comment._id}>
//           {comment.text}
//           {' '}
//           ({comment.userId.email})
//           {updateForm}
//         </li>
//       )
//     })
//   )
//   const listView = (
//     list.length === 0 ? (
//       <p>Your the first to comment on this recipe!</p>
//     ) : (
//       <ul>
//         {itemViews}
//       </ul>
//     )
//   )
//   return (
//     <div>
//       <h3>Comments</h3>
//       {listView}
//     </div>
//   );
// };

export default CommentList;
