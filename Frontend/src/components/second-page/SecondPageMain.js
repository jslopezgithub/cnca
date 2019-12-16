/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';

import TableForm from './table-form/TableForm';
import UserInfo from '../Shared/UserInfo';

class SecondPageMain extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Loading...' };
  }

  //   componentDidMount() {
  //     getMessage().then(message => this.setState({ message }));
  //   }

  // eslint-disable-next-line class-methods-use-this
  render() {
    // const { message } = this.state;
    return (
      <div>
        <h1>Cnca Project</h1>
        <UserInfo />
        <TableForm />
      </div>
    );
  }
}
export default SecondPageMain;
