import PropTypes from "prop-types";
import { Component } from "react";

class Phonebook extends Component {
  state = {
    // contacts: [],
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
    this.props.createUser({
      name: this.state.name,
      contacts: this.state.contacts,
    });
    this.setState({
      // contacts: [],
      // filter: "",
      name: "",
      number: "",
    });
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
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>

       <ul>
          {this.props.contacts.map((contact) => (
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
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Phonebook;
