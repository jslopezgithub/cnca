/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';

class FullnameDate extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: 'Loading...' };
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    // const { userInfo } = this.state;
    return (
      <div>
        <h1>User-Activity</h1>
      </div>
    );
  }
}
export default FullnameDate;
