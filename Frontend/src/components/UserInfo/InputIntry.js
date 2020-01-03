import React, { Component } from 'react';
import './UserInfo.css';
export default class InputIntry extends Component {
  state = {
    value: '',
    isInEditMod: false
  };

  changeEditMode = () => {
    this.setState({
      isInEditMod: !this.state.isInEditMod
    });
  };

  updateComponentValue = () => {
    this.setState({
      isInEditMod: false,
      value: this.refs.theTextInput.value
    });
  };

  renderEditView = () => {
    return (
      <div>
        <input
          type='text'
          defaultValue={this.state.value}
          className='inputa editview'
          ref='theTextInput'
        />
        <button className='xclick' onClick={this.changeEditMode}>
          <p>X</p>
        </button>
        <button className='yesclick' onClick={this.updateComponentValue}>
          <p>✓</p>
        </button>
      </div>
    );
  };

  rederDefaultView = () => {
    return (
      <input
        type='text'
        onDoubleClick={this.changeEditMode}
        value={this.state.value}
        className='inputa'
        placeholder='Digitare qui...'
      />
    );
  };
  render() {
    return this.state.isInEditMod
      ? this.renderEditView()
      : this.rederDefaultView();
  }
}
