/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getMessage } from './service';
import './App.css';
<<<<<<< HEAD

import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import AfterLogin from './components/AfterLogin';
import Login from './components/login/Login';
import ForgotenPass from './components/forgotenPass/ForgotenPass';
import Registration from './components/registration/Registration';
||||||| merged common ancestors
import UserInfo from './components/Shared/UserInfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
=======
import UserInfo from './components/Shared/userInfo/UserInfo';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
// import FullName from './components/FirstPage/secondComponent/FullName';
import SecondCompMain from './components/FirstPage/secondComponent/SecondCompMain';
// eslint-disable-next-line import/no-named-as-default-member
import Registration from './components/registration/Registration';
>>>>>>> 33da0e49befe25b97d3ab0bf869cf9cae9596e42

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
<<<<<<< HEAD
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
||||||| merged common ancestors
      <div>
        <Navbar />
        <Home />
        <UserInfo />
        <Footer />
      </div>
=======
      <div>
        <Navbar />
        <Registration />
        <SecondCompMain />
        <UserInfo />
        <Footer />
      </div>
>>>>>>> 33da0e49befe25b97d3ab0bf869cf9cae9596e42
    );
  }
}
export default App;
