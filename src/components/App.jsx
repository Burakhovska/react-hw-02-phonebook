import { Component } from "react";
import Phonebook from "./Phonebook/Phonebook";
import { nanoid } from "nanoid";


class App extends Component {
  state = {
    contacts: [],
  };

  createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log(newUser)
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };
  

  render() {
    return (
      <div className="container">
        <Phonebook createUser={this.createUser} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
