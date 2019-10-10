import React, { Component } from "react";

import Header from "../components/Header";

export default class Home extends Component {
  state = {
    styleClass: "formHeader"
  };

  handleProps() {}
  render() {
    console.log(this.props);
    return (
      <div>
        <Header styleClass={this.state.styleClass} />
      </div>
    );
  }
}
