import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Header({ styleClass }) {
  return (
    <div className="header">
      <div className="header-img"></div>
      <div className="header-container">
        <div className="text-container">
          <div className="header-text">
            <h3>Delicious Recipes</h3>
            <h4>Any food you can think of!</h4>
            <div className="link-div">
              <Link to="/recipes" className="link-header">
                Search Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  styleClass: "formHeader"
};
