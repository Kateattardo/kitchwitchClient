import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';



function Show(props) {
  const [recipe, setRecipe] = useState({});
  console.log("this is a recipe")
  const { id } = useParams();
  console.log('show ',id)

   useEffect(() => {
    const showRecipe = async () => {
      const response = await axios.get(`http://localhost:8000/spoonacular/recipe/${id}`);
      console.log('show response', response)
      setRecipe(response.data);
}
showRecipe()},[]);

   
      console.log('recipe', recipe)
  return (
    <div>
    <h2>{recipe.title}</h2>
    <img src={recipe.image} alt={recipe.title} />
    <p>Instructions: {recipe.instructions}</p>
  </div>

      // <div>
      //   <h1>{props.msgAlert}</h1>
      //   <h2>{recipe.title}</h2>
      //   <img src={recipe.image} alt={recipe.title} />
      //   <p>Instructions: {recipe.instructions}</p>
      //   <p>User: {props.user}</p>
      // </div>
    )

  }




  



export default Show;