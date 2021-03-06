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
      userinfo: {},
      dailyActivity: ''
    };
  }

  handdlingUserInfo = userdata => {
    console.log(userdata);
    this.setState({
      userinfo: userdata,
      loading: true
    });
  };

  handlingDailyActivity = dailyData => {
    console.log(dailyData);
    this.setState({
      dailyActivity: dailyData
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="afterloginsizing">
        <div className="userInfo">
          <UserInfo action={this.handdlingUserInfo} />
        </div>

        <div className="beforeAndAfter">
          {/* {this.state.loading === false ? (
            <Beforefillinguserinfo />
          ) : ( */}
          <Home
            userName={this.state.userinfo}
            dailyData={this.handlingDailyActivity}
            totalTimeDaily={this.state.dailyActivity}
          />
          {/* )} */}
        </div>
      </div>
    );
  }
}
