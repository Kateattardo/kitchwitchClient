import React from 'react';
import { Link } from 'react-router-dom'

function RecipeSearch({
  recipes,
  ingredients,
  setIngredients,
  handleSearch
}) {
  const recipeViews = recipes.map(recipe => {
    return (
      <div key={recipe.id}>
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