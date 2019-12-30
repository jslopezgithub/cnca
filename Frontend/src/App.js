/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getMessage } from './service';
import './App.css';

import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import AfterLogin from './components/AfterLogin';
import Login from './components/login/Login';
import ForgotenPass from './components/forgotenPass/ForgotenPass';
import Registration from './components/registration/Registration';

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
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/password' component={ForgotenPass} />
            <Router path='/re' component={Registration} />
            <Router path='/user' component={AfterLogin} />
          </Switch>
          <Registration />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
