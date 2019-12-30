import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div id='mainContainer'>
        <div className='body'>
          <div className='dataBox'>
            <div className='dataBox2'>
              <span className='inputs'>
                <input type='text' placeholder='E-Mail'></input>
                <span className='iconBackground'>
                  <i className='Eicon fas fa-envelope'></i>
                </span>
                <input type='password' placeholder='password'></input>
                <span className='iconBackground2'>
                  <i className='Eicon2 fas fa-lock'></i>
                </span>
              </span>
              <span className='checkBox'>
                <input type='checkbox' />
              </span>
              <p className='Resta'>Resta collegato</p>
              <button className='btn'>ACCESSO</button>
              {/* ------------------------------Forget password  & Registration Links */}
              <div className='fpassword'>
                <a style={{ color: 'white' }} href='#'>
                  Ha dimrnticato <br /> la password?
                </a>
              </div>
              <div className='registare'>
                <a style={{ color: 'white' }} href='#'>
                  Registare
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
