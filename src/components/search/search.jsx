import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function RecipeSearch() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [instructions, setInstructions] = useState('')
  console.log('render instructions', instructions)

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/spoonacular/complex-search',
        {
          params: {
            ingredients,
          }
        }
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const recipeViews = recipes.map(recipe => {
    const handleOnClick = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/spoonacular/recipes',
          {
            params: {
              recipeId: recipe.id,
              instructionsRequired: true

            }
          }
        );
        setInstructions(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    return (
      <div key={recipe.id} onClick={handleOnClick}>
       {/* <Link to="/recipe.Id"><h3>{recipe.title}</h3></Link> */}
       <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        <img src={recipe.image} alt={recipe.title} />
      </div>
    )
  })

  return (
    <div>
      <input
        type="text"
        placeholder="Enter ingredients..."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {recipeViews}
    </div>
  );
}

export default RecipeSearch;