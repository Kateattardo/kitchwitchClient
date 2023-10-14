import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentForm from "./comment/CommentForm";
import CommentList from "./comment/CommentList";
import CommentUpdateForm from "./comment/CommentUpdateForm.js";
import DeleteComment from "./comment/DeleteComment";

function Show(props) {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const baseUrl = `http://localhost:8000/spoonacular/recipe/${id}`;

  useEffect(() => {
    const showRecipe = async () => {
      const response = await axios.get(baseUrl);
      setRecipe(response.data);
    };
    showRecipe();
  }, [baseUrl]);

  console.log("token", props?.user?.token);

  async function onCommentSubmit(commentText, recipeId) {
    const commentUrl = `http://localhost:8000/recipe/${id}/comment`;
    const body = {
      comment: {
        text: commentText,
      },
    };
    const options = {
      headers: {
        Authorization: `Bearer ${props?.user?.token}`,
      },
    };
    const response = await axios.post(commentUrl, body, options);
    console.log("rspn", response);
    setList((prevState) => [...prevState, response.data.comment]);
  }

  const commentForm =
    props.user == null ? (
      <></>
    ) : (
      <CommentForm recipeId={id} onCommentSubmit={onCommentSubmit} />
    );

  const [list, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      const url = `http://localhost:8000/recipe/${id}/comment`;
      const response = await axios.get(url);
      console.log("resp", response);
      setList(response.data.comment);
    }
    getList();
  }, [id]);

  async function onUpdateComment(commentId, updatedText) {
    const commentUrl = `http://localhost:8000/comment/${commentId}`;
    const options = {
      headers: {
        Authorization: `Bearer ${props?.user?.token}`,
      },
    };
    const body = {
      commentText: updatedText,
    };
    const response = await axios.patch(commentUrl, body, options);
    return response;
  }

  async function onDeleteComment(e, commentId) {
    e.preventDefault();
    const commentUrl = `http://localhost:8000/${commentId}`;
    const options = {
      headers: {
        Authorization: `Bearer ${props?.user?.token}`,
      },
    };
    const response = await axios.delete(commentUrl, options);
    if (response.data.success) {
      const updatedList = list.filter((l) => l._id !== commentId);
      setList(updatedList);
    }
  }

  return (
    <div>
      <img src={recipe.image} alt={recipe.title} />
      <div class="card current-recipe" key={recipe.id}>
        <div class="card-body">
          <h5 class="card-title">{recipe.title}</h5>
          <p class="card-text">Instructions: {recipe.instructions}</p>
        </div>
      </div>
      <div className="comment-form">
        {props.user && (
          <CommentForm onCommentSubmit={onCommentSubmit} id={id} />
        )}
      </div>

      <div className="comment-list">
        {list?.map((l) => {
          const { _id, text } = l;
          return (
            <CommentUpdateForm
              key={_id}
              commentId={_id}
              onUpdateComment={onUpdateComment}
              text={text}
              onDeleteComment={onDeleteComment}
            />
          );
        })}
      </div>

      {/* <CommentList
        recipeId={id}
        list={list}
        onDeleteComment={onDeleteComment}
        onUpdateComment={onUpdateComment}
        userId={props.user?._id}
        userToken={props.user?.token}
      /> */}
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
  );
}

export default Show;
