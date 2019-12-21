/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './UserInfo.css';
import 'bulma/css/bulma.css';

import UserImg from './UserImg';

export default class UserInfo extends Component {
  render() {
    return (
      <div className='maincontainer'>
        <UserImg />

        <i
<<<<<<< HEAD
          onClick={''}
          className='fa fa-pencil-square-o btn'
          aria-hidden='true'
||||||| merged common ancestors
          onClick={""}
          className="fa fa-pencil-square-o btn"
          aria-hidden="true"
=======
          onClick={''}
          className="fa fa-pencil-square-o btn"
          aria-hidden="true"
>>>>>>> e3bafa1ce51d9bc82da9009082fa3b1bf2fa4ffa
          style={{ fontSize: 30 }}
        ></i>

        <div className='userInfo'>
          <p>NOME</p>
          <input type='text' className='dataInput' />
          <p>COGNOME</p>
          <input type='text' className='dataInput grayInput' />
          <p>ORGANIZZAZIONE</p>
          <input type='text' className='dataInput' />
          <p>SEDE DO SVOLGIMENTO</p>
          <input type='text' className='dataInput grayInput' />
          <p>DEFINIZIONE attività 1</p>
          <input type='text' className='dataInput' />
          <p>DEFINIZIONE attività 2</p>
          <input type='text' className='dataInput grayInput' />
          <p>DEFINIZIONE attività 3</p>
          <input type='text' className='dataInput' />
        </div>
      </div>
    );
  }
}
