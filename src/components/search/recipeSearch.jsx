import React from "react";
import { Link } from "react-router-dom";

function RecipeSearch({ recipes, ingredients, setIngredients, handleSearch }) {
  const recipeViews = recipes.map((recipe) => {
    return (
      <div className="col-4 mb-4">
        <div class="card" style={{ width: "18rem" }} key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <div class="card-body">
            <h5 class="card-title">{recipe.title}</h5>
            <Link className="btn btn-secondary" to={`/recipe/${recipe.id}`}>
              View recipe
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="recipe-wrapper">
      <form className="d-flex align-items-center recipe-search mt-2">
        <input
          type="text"
          placeholder="Enter ingredients..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="form-control me-3"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </form>
      <div className="row recipes">{recipeViews}</div>
    </div>
  );
}

export default RecipeSearch;
