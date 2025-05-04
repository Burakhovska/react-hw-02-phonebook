import PropTypes from "prop-types";
import { Component } from "react";

class Phonebook extends Component {
  state = {
    contacts: [],
    // filter: "",
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const newUser = this.props.createUser({ name, number });

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newUser],
      // filter: "",
      name: "",
      number: "",
    }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h1>Name</h1>
            </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              className="form-control"
              // id="exampleInputEmail1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <h2>Number</h2>
            </label>
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
              className="form-control"
              // id="exampleInputPassword1"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add contact
          </button>
        </form>

        <ul>
          {this.state.contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Phonebook.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default Phonebook;
