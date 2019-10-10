import React, { Component } from "react";
import Recipe from "./SingleRecipe";

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div>
        <div className="recipeList-container">
          {recipes.map(recipe => (
            <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    );
  }
}
