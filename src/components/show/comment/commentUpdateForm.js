// import axios from "axios"
import { useState } from "react";

const CommentUpdateForm = ({
  text,
  onUpdateComment,
  commentId,
  onDeleteComment,
}) => {
  const [commentText, setCommentText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await onUpdateComment(commentId, commentText);
    if (response.data.success) {
      setIsEditing(false);
    }
  };

  const handleEditMode = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const CancelEdit = () => setIsEditing(false);

  return (
    <form className="p-2 d-flex align-items-center">
      <input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        disabled={isEditing ? false : true}
        className="me-3 form-control"
      />
      {isEditing && <button className="btn btn-secondary" onClick={CancelEdit}>Cancel</button>}
      <div className="d-flex align-items-center">
        <button
          className="btn btn-secondary"
          onClick={(e) => (isEditing ? handleSubmit(e) : handleEditMode(e))}
        >
          {isEditing ? "Update" : "Edit"}
        </button>
        <button
          className="btn btn-danger ms-3"
          onClick={(e) => onDeleteComment(e, commentId)}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

// export default function CommentUpdateForm (props) {
//   const [commentText, setCommentText] = useState('')
//   function handleChange (event) {
//     setCommentText(event.target.value)
//   }
//   async function handleSubmit (event) {
//     event.preventDefault()
//     const url = `http://localhost:8000/comment/${props.commentId}`
//     const body = { commentText }
//     const bearer = `Bearer ${props.userToken}`
//     const headers = { Authorization: bearer }
//     const options = { headers }
//     await axios.patch(url, body, options)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={commentText} onChange={handleChange} />
//       <button>Update</button>
//     </form>
//   )
// }
export default CommentUpdateForm;
