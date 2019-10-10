import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleRecipe extends Component {
  render() {
    const {
      publisher,
      title,
      source_url,
      image_url,
      recipe_id
    } = this.props.recipe;
    return (
      <div className="recipeList">
        <div className="recipeImg-container">
          <img src={image_url} alt="recipe" className="recipeImg" />
        </div>
        <div className="singleRecipe-items">
          <div className="pad">
            <h4 className="recipe-populartitle">{title}</h4>
            <h4 className="recipe-publisher">Provided by {publisher}</h4>
          </div>
          <div className="btn-container">
            <div className="btn-div1 btn-div">
              <Link to={`/recipes/${recipe_id}`}>Details</Link>
            </div>
            <div className="btn-div2 btn-div">
              <a href={source_url} target="_blank" rel="noopener noreferrer">
                recipe url
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
