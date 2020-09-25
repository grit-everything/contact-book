import React, { Component } from 'react';

class PhoneForm extends Component {
  // input = null;
  input = React.createRef();

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate({
      name: this.state.name,
      phone: this.state.phone,
    });
    this.setState({
      name: '',
      phone: '',
    });
    // this.input.focus();
    this.input.current.focus();
  };
  state = {
    name: '',
    phone: '',
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Contact List</h1>
        <div>
          <input
            name="name" //
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
            // ref={(ref) => {
            //   this.input = ref;
            // }}
            ref={this.input}
          />

          <input
            name="phone" //
            placeholder="number"
            onChange={this.handleChange}
            value={this.state.phone}
          />
        </div>

        <button type="submit">New Contact</button>
      </form>
    );
  }
}

export default PhoneForm;
