import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { createRef } from "react";
import Display from "./display";

class Ui extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    //     creating ref to communicate with the DOM element
    this.inputRef = React.createRef();

    // setting the state
    this.state = {
      lists: [],
    };

    //    bindinding this to the addList to have access to the this outside the constructor
    this.addLists = this.addLists.bind(this);
    //    bindinding this to the deleteList to have access to the this outside the constructor
    this.deleteList = this.deleteList.bind(this);
  }

  //   creating the addList function
  addLists(e) {
    if (this.inputRef.current.value !== "") {
      let newList = {
        // adding new text
        text: this.inputRef.current.value,
        // add a random key ...we can use the date function or Math.random function
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          //         adding the new items to the state...
          lists: prevState.lists.concat(newList),
        };
      });
      this.inputRef.current.value = "";

      console.log(this.state.lists);
    }

    // prvent default loading
    e.preventDefault();
  }

  // delete function
  deleteList(key) {
    // filter the added lists array and return the value whose key isnt = key
    let updatedList = this.state.lists.filter((list) => list.key !== key);

    // pass the values back to the set state
    this.setState({
      lists: updatedList,
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <header>
          <h2 className="text-center">Simple List</h2>
        </header>
        <div className="form text-center">
          <form action="" className="input-group" onSubmit={this.addLists}>
            <input
              type="text"
              className="form-control"
              placeholder="add item"
              ref={this.inputRef}
            />
            <button type="submit" className="button btn btn-primary">
              Add
            </button>
          </form>
        </div>
        <div className="mt-3">
          <Display addedItem={this.state.lists} deleteItem={this.deleteList} />
        </div>
      </div>
    );
  }
}

export default Ui;
