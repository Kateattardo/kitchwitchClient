import axios from "axios"
import { useState } from "react"

export default function CommentUpdateForm (props) {
  const [commentText, setCommentText] = useState('')
  function handleChange (event) {
    setCommentText(event.target.value)
  }
  async function handleSubmit (event) {
    event.preventDefault()
    const url = `http://localhost:8000/comment/${props.commentId}`
    const body = { commentText }
    const bearer = `Bearer ${props.userToken}`
    const headers = { Authorization: bearer }
    const options = { headers }
    await axios.patch(url, body, options)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={commentText} onChange={handleChange} />
      <button>Update</button>
    </form>
  )
}