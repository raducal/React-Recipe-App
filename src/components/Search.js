import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search, styleClass } = this.props;

    return (
      <div className="form-container">
        <form action="/search" onSubmit={handleSubmit} className={styleClass}>
          <label htmlFor="search" className="searchLabel">
            Search
          </label>
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            className="input-form"
          />
          <button type="button" className="btn-search">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

Search.defaultProps = {
  styleClass: "form"
};
