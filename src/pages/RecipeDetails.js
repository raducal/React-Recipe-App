import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: recipeData,
      id,
      loading: true
    };
  }

  async componentDidMount() {
    const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;

    try {
      const response = await fetch(url);
      const recipeData = await response.json();

      this.setState({
        recipe: recipeData.recipe,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title
    } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className="loader">
          <div className="loader-container"></div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="recipe-title-div">
            <h3 className="recipe-title">{title}</h3>
            <h3>Published by {publisher}</h3>
          </div>
          <div className="recipe-container">
            <div>
              <img
                src={image_url}
                alt="recipe"
                className="recipeDetails-image"
              />
            </div>
            <div className="recipe-info">
              <div className="detailsbtn-container">
                <div className="btn-details">
                  <a
                    href={publisher_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    publisher
                  </a>
                </div>
                <div className="btn-details">
                  <a
                    href={source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    recipe url
                  </a>
                </div>
              </div>
              <div className="recipe-ingredients">
                <h3>Ingredients</h3>
                <ul className="ingredient-links">
                  {ingredients.map((item, index) => {
                    return (
                      <li key={index} className="list-group-item text-slanted">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
