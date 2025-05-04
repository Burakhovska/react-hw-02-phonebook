import { Component } from "react";
import Phonebook from "./Phonebook/Phonebook";
import { nanoid } from "nanoid";
// import { number } from "prop-types";

class App extends Component {
  createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    return newUser;
  };

  render() {
    return (
      <div className="container">
        <Phonebook createUser={this.createUser} />
      </div>
    );
  }
}

export default App;
