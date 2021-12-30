import React from "react";

class Ui extends React.Component {
  render() {
    return (
      <div class="container mt-5">
        <header>
          <h2 class="text-center">Simple List</h2>
        </header>
        <div class="form text-center">
          <form action="" class="input-group">
            <input type="text" class="form-control" placeholder="add item" />
            <button type="submit" class="button btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Ui;
