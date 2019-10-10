import React, { Component } from "react";
import { recipeData } from "../data/tempList";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { withRouter } from "react-router-dom";

class PopularRecipes extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(props);
  // }
  // state = {
  //   recipes: this.props.recipe
  // };

  // async componentDidMount() {
  //   const url = `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`;

  //   try {
  //     const response = await fetch(url);
  //     const recipeData = await response.json();

  //     this.setState({
  //       recipes: recipeData.recipes
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  constructor(props) {
    super(props);
    this.state = {
      recipes: recipeData,
      url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
      base_url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
      query: "&q=",
      search: ""
    };
  }

  async getRecipes() {
    try {
      const response = await fetch(this.state.url);
      const recipeData = await response.json();

      this.setState({
        recipes: recipeData.recipes,
        search: ""
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;

    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: ""
      },
      () => this.getRecipes()
    );
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      search: e.target.value
    });
  };

  render() {
    console.log(this.state.recipes);
    return (
      <div>
        <div className="search-div">
          <h3>Search your favourite foods</h3>
          <Search
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            search={this.state.search}
          />
        </div>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default withRouter(PopularRecipes);
