/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
// import Beforefillinguserinfo from './UserInfo/Beforefillinguserinfo';
import Home from './Shared/Home';
import UserInfo from './UserInfo/UserInfo';
import './AfterLogin.css';

export default class AfterLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userinfo: {}
    };
  }

  handdlingUserInfo = userdata => {
    console.log(userdata);
    this.setState({
      userinfo: userdata,
      loading: true
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="afterloginsizing">
        <UserInfo action={this.handdlingUserInfo} />
        {/* {this.state.loading === false ? (
          <Beforefillinguserinfo />
        ) : ( */}
        <Home userName={this.state.userinfo} />
        {/* )} */}
      </div>
    );
  }
}
