import React from "react";
import { Component } from "react/cjs/react.production.min";

class Display extends Component {
  constructor(props) {
    super(props);

    // bind the createList with this
    this.createLists = this.createLists.bind(this);
  }

  // the delete function to pass in the event handler
  delete(key) {
    this.props.deleteItem(key);
  }
  // creating a list method
  createLists(list) {
    return (
      // creating the list and adding a click event handler for deleting
      <li key={list.key} className="list-group-item" onClick={() => this.delete(list.key)}>
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
