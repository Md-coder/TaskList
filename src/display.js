import React from "react";
import { Component } from "react/cjs/react.production.min";

class Display extends Component {
  // creating a list method
  createLists(list) {
    return (
      <li key={list.key} className="list-group-item">
        {list.text}
      </li>
    );
  }

  render() {
    //   calling the props from the ui.js file
    let enteries = this.props.addedItem;
    let listItem = enteries.map(this.createLists);

    return <ul className="list-group">{listItem}</ul>;
  }
}

export default Display;
