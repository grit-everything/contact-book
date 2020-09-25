import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 3;
  state = {
    information: [
      {
        id: 0,
        name: 'Jake',
        phone: '0421375423',
      },
      {
        id: 1,
        name: 'Jenny',
        phone: '0421958423',
      },
      {
        id: 2,
        name: 'Leon',
        phone: '0433321223',
      },
    ],
    keyword: '',
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
    console.log(this.state.keyword);
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleCreate = (data) => {
    // const {information} = this.state
    this.setState({
      information: this.state.information.concat({ ...data, id: this.id++ }),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }),
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword} //
          onChange={this.handleChange}
          placeholder="search.."
        />
        <PhoneInfoList
          data={this.state.information.filter((info) => info.phone.indexOf(this.state.keyword) > -1 || info.name.indexOf(this.state.keyword) > -1)} //
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
