import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import CommentForm from '../show/comment/commentForm';
import CommentList from './comment/commentList'

function Show(props) {
  const [recipe, setRecipe] = useState({});
  console.log("props.user", props.user)
  const { id } = useParams();
  const baseUrl = `http://localhost:8000/spoonacular/recipe/${id}`
  useEffect(() => {
    const showRecipe = async () => {
      const response = await axios.get(baseUrl);
      console.log('show response', response)
      setRecipe(response.data);
    }
    showRecipe()
  }, [baseUrl]);
  async function onCommentSubmit (commentText, recipeId) {
    const commentUrl = `http://localhost:8000/recipe/${id}/comment`
    console.log('Comment submitted', commentText, recipeId)
    const body = {
      comment: {
        text: commentText
      }
    }
    const options = {
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    }
    await axios.post(commentUrl, body, options)
  }
  const commentForm = props.user == null
    ? <></>
    : <CommentForm recipeId={id} onCommentSubmit={onCommentSubmit}/>
  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>Instructions: {recipe.instructions}</p>
      {commentForm}
      <CommentList
        recipeId={id}
        userId={props.user?._id}
        userToken={props.user?.token}
      />
    </div>
  )
}

export default Show;