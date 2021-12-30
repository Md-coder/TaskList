import React from "react";
import ReactDom from "react-dom";
import Ui from "./ui";

class App extends React.Component {
  render() {
    return <Ui />;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
