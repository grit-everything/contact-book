import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
  state = {
    editting: false,
    name: '',
    phone: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState || this.props.info !== nextProps.info) {
      return true;
    }
    return false;
    // if (this.state !== nextState) {
    //   return true;
    // }
    // return this.props.info !== nextProps.info;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleToggleEdit = () => {
    //true -> false
    // onUpdate
    //false -> true
    //  state 에서 info 값들(name,phone)을 넣어줘야 한다.

    const { info, onUpdate } = this.props;
    // const info = this.props.info
    // const onUpdate = this.props.onUpdate
    if (this.state.editting) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone,
      });
    } else {
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }

    this.setState({
      editting: !this.state.editting,
    });
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  render() {
    const { name, phone } = this.props.info;
    const { editting } = this.state;

    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
      backgroundColor: 'aqua',
    };
    return (
      <div style={style}>
        {editting ? (
          <Fragment>
            <div>
              <input
                name="name" //
                placeholder="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div>
              <input
                name="phone" //
                placeholder="phone"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <b>{name}</b>
            </div>
            <div>{phone}</div>
          </Fragment>
        )}

        <button onClick={this.handleRemove}>Delete</button>
        <button onClick={this.handleToggleEdit}>{editting ? 'confirm' : 'edit'}</button>
      </div>
    );
  }
}

export default PhoneInfo;
