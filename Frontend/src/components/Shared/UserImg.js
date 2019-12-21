/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './UserImg.css';
import 'font-awesome/css/font-awesome.min.css';

export default class UserImg extends Component {
  render() {
    return (
      <div className='UserImg icon'>
        <i
          className='fa fa-user-circle'
          aria-hidden='true'
          style={{ fontSize: 100 }}
        ></i>
      </div>
    );
  }
}
