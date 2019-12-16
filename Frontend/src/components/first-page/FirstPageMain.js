/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';

import Activity from './settimanalmente/Activity';
import UserInfo from '../Shared/UserInfo';

class FirstPageMain extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: 'Loading...' };
  }

  //   componentDidMount() {
  //     getMessage().then(message => this.setState({ message }));
  //   }

  // eslint-disable-next-line class-methods-use-this
  render() {
    // const { userInfo } = this.state;
    return (
      <div>
        <h1>Cnca Project</h1>
        <UserInfo />
        <Activity />
      </div>
    );
  }
}
export default FirstPageMain;
