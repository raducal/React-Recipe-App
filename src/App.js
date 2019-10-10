import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import Home from "./pages/Home";
import PopularRecipes from "./pages/PopularRecipes";
import RecipeDetails from "./pages/RecipeDetails";

import Navbar from "./components/Navbar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* navbar */}
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/recipes" exact component={PopularRecipes}></Route>
            <Route path="/recipes/:id" component={RecipeDetails}></Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default withRouter(App);
