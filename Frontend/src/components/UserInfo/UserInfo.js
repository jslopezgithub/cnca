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
        <span className='userinfo'>
          <p>NOME</p>
          <input type='text' className='inputa' />
          <p>COGNOME</p>
          <input type='text' className='inputa grayInput' />
          <p>ORGANIZZAZIONE</p>
          <input type='text' className='inputa ' />
          <p>SEDE DO SVOLGIMENTO</p>
          <input type='text' className='inputa grayInput' />
          <p>DEFINIZIONE attività 1</p>
          <input type='text' className='inputa ' />
          <p>DEFINIZIONE attività 2</p>
          <input type='text' className=' inputa grayInput' />
          <p>DEFINIZIONE attività 3</p>
          <input type='text' className='inputa' />
        </span>
        {/* -------------------------------------------------------Icons */}
        <div className='icons'>
          <i alt='Edit' className='fas fa-edit'></i>
          <i className='far fa-save'></i>
          <i className='fas fa-file-download'></i>
        </div>
        {/* ---------------------------------------------------------pagination */}
        <div className='block'>
          <nav className='pagination is-rounded is-small '>
            <a href='' className='pagination-previous previous' disabled>
              <i className='fas fa-chevron-left'></i>
            </a>
            <a href='' className='pagination-next is-danger next'>
              <i className='fas fa-chevron-right'></i>
            </a>
            <ul className='pagination-list listnumber content is-small '>
              <li>
                <a href='#' className='pagination-link is-current current'>
                  1
                </a>
                <a href='#' className='pagination-link plink '>
                  2
                </a>
                <a href='#' className='pagination-link plink'>
                  3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
