/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputIntry from './InputIntry';
import Pagination from './Pagination';
import './UserInfo.css';
import 'bulma/css/bulma.css';
import UserImg from './UserImg';

export default class UserInfo extends Component {
  render() {
    return (
      <div className='maincontainer'>
        <UserImg />
        <span className='userinfo'>
          <p>NOME</p>
          <InputIntry />
          <p>COGNOME</p>
          <InputIntry />
          <p>ORGANIZZAZIONE</p>
          <InputIntry />
          <p>SEDE DO SVOLGIMENTO</p>
          <InputIntry />
          <p>DEFINIZIONE attività 1</p>
          <InputIntry />
          <p>DEFINIZIONE attività 2</p>
          <InputIntry />
          <p>DEFINIZIONE attività 3</p>
          <InputIntry />
        </span>

        <Pagination />
      </div>
    );
  }
}
