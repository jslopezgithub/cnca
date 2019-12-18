/* eslint-disable import/no-named-as-default */
import React, { Component } from "react";

import { getMessage } from "./service";
// import logo from './logo.svg';
import "./App.css";
import UserInfo from "./components/Shared/UserInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Loading..." };
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
        <Home />
        <UserInfo />
        <Footer />
      </div>
    );
  }
}
export default App;
