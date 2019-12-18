/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';

import { getMessage } from './service';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Loading...' };
  }

  componentDidMount() {
    getMessage().then(message => this.setState({ message }));
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    // const { message } = this.state;
    return (
      <div>
        <h1>Cnca Project Team-3 </h1>
      </div>
    );
  }
}
export default App;
