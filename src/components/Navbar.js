import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default class Navbar extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;
    return (
      <div>
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="logo">Recipe Cloud</h1>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="nav-link">
                  Recipes
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
