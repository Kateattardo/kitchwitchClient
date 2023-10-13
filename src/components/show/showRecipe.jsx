import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import CommentForm from './comment/CommentForm';
import CommentList from './comment/CommentList';
import CommentUpdateForm from './comment/CommentUpdateForm.js';
import DeleteComment from './comment/DeleteComment';

function Show(props) {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const baseUrl = `http://localhost:8000/spoonacular/recipe/${id}`
  useEffect(() => {
    const showRecipe = async () => {
      const response = await axios.get(baseUrl);
      setRecipe(response.data);
    }
    showRecipe()
  }, [baseUrl]);
  async function onCommentSubmit (commentText, recipeId) {
    const commentUrl = `http://localhost:8000/recipe/${id}/comment`
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

    const [list, setList] = useState([])
      useEffect(() => {
        async function getList() {
          const url = `http://localhost:8000/recipe/${id}/comment`
          const response = await axios.get(url)
          setList(response.data.comment)
        }
        getList()
      }, [])


  async function onUpdateComment (commentId, updatedText) {
      const commentUrl = `http://localhost:8000/comment/${commentId}`
      const options = {
        headers: {
          Authorization: `Bearer ${props.user.token}`
        }
      }
        await axios.patch(commentId);
        Comment(prev => prev.map(comment => 
          comment.id === commentId ? {...comment, text: updatedText} : comment
        ));
      } 
    
  

    async function onDeleteComment (commentId) {
      const commentUrl = `http://localhost:8000/${commentId}`
      const options = {
        headers: {
          Authorization: `Bearer ${props.user.token}`
        }
       } 
        await axios.delete(commentId);
        Comment(prev => prev.filter(comment => comment.id !== commentId));
      }
    
    
    
  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>Instructions: {recipe.instructions}</p>
      {props.user && (
        <CommentForm onCommentSubmit={onCommentSubmit}/>
      )}
      <CommentList
        recipeId={id}
        list={list}
        onDeleteComment={onDeleteComment}
        onUpdateComment={onUpdateComment}
        userId={props.user?._id}
        userToken={props.user?.token}
      />
    </div>
    // <div>
    //   <h2>{recipe.title}</h2>
    //   <img src={recipe.image} alt={recipe.title} />
    //   <p>Instructions: {recipe.instructions}</p>
    //   {commentForm}
    //   <CommentList
    //     recipeId={id}
    //     userId={props.user?._id}
    //     userToken={props.user?.token}
    //   />
    // </div>
  )}
    

export default Show;