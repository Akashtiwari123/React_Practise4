import React from "react";

import "./styles.css";

class Conditional extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }

  render() {
    let text = this.state.isLoggedIn ? "Log Out" : "Log In";
    let logtext = this.state.isLoggedIn ? "Logged In" : "Logged Out";
    return (
      <div>
        <button onClick={this.handleClick}>{text}</button>
        <h4>{logtext}</h4>
      </div>
    );
  }
}

export default Conditional;
