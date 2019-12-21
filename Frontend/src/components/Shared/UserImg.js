/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './UserImg.css';
import 'font-awesome/css/font-awesome.min.css';

export default class UserImg extends Component {
  render() {
    return (
      <div className='UserImg icon'>
        <i
<<<<<<< HEAD
          className='fa fa-user-circle'
          aria-hidden='true'
||||||| merged common ancestors
          class="fa fa-user-circle"
          aria-hidden="true"
=======
          className="fa fa-user-circle"
          aria-hidden="true"
>>>>>>> e3bafa1ce51d9bc82da9009082fa3b1bf2fa4ffa
          style={{ fontSize: 100 }}
        ></i>
      </div>
    );
  }
}
