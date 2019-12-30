/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
// import './UserInfo.css';

import UserImg from './UserImg';

export default class UserInfo extends Component {
  render() {
    return (
      <div className="maincontainer">
        <UserImg />

        <div className="userInfo">
          <p>NOME</p>
          <input type="text" className="dataInput" />
          <p>COGNOME</p>
          <input type="text" className="dataInput grayInput" />
          <p>ORGANIZZAZIONE</p>
          <input type="text" className="dataInput" />
          <p>SEDE DO SVOLGIMENTO</p>
          <input type="text" className="dataInput grayInput" />
          <p>DEFINIZIONE attività 1</p>
          <input type="text" className="dataInput" />
          <p>DEFINIZIONE attività 2</p>
          <input type="text" className="dataInput grayInput" />
          <p>DEFINIZIONE attività 3</p>
          <input type="text" className="dataInput" />
        </div>
      </div>
    );
  }
}
