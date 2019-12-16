/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';

import FirstPageMain from './components/first-page/FirstPageMain';
import SecondPageMain from './components/second-page/SecondPageMain';

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
        <h1>Cnca Project</h1>
        <FirstPageMain />
        <SecondPageMain />
      </div>
    );
  }
}
export default App;
