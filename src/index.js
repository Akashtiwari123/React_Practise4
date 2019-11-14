import React from "react";
import ReactDOM from "react-dom";
import Conditional from "./Conditional";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      unreadmsg: ["Hi this is react", "New msg available", "New msg"]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.unreadmsg.length > 0 ? (
          <h2>You have {this.state.unreadmsg.length} unread message!</h2>
        ) : null}
        <h2>
          <Conditional />
        </h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
