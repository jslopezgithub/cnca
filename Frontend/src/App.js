/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';

import { getMessage } from './service';
// import logo from './logo.svg';
import './App.css';
import UserInfo from './components/Shared/userInfo/UserInfo';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
// eslint-disable-next-line import/no-named-as-default-member
// import Registration from './components/registration/Registration';

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
        <Navbar />
        {/* <Registration /> */}
        <UserInfo />
        <Footer />
      </div>
    );
  }
}
export default App;
