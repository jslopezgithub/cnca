import React, { Component } from 'react';

import { getMessage } from './service';
// import logo from './logo.svg';
import './App.css';

export class App extends Component {
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
        {/* <img
          className="logo"
          data-qa="logo"
          src={logo}
          alt="Just the React logo"
        /> */}
        {/* <p className="message" data-qa="message">
          {message}
        </p> */}
        <h1>Cnca Project</h1>
      </div>
    );
  }
}
export default App;
