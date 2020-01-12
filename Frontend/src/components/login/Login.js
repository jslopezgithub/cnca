import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default class Login extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div id='mainContainer'>
        <div className='body'>
          <div className='dataBoxcont'>
            <div className='dataBoxcont2'>
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
              <Link to='./home/firstpage'>
                <button className='btn'>ACCESSO</button>
              </Link>
              {/* ------------------------------Forget password  & Registration Links */}
              <div className='fpassword'>
                <Link to='./forget-password' style={{ color: 'white' }}>
                  Ha dimrnticato <br /> la password?
                </Link>
              </div>
              <div className='registare'>
                <Link to='./sign-up' style={{ color: 'white' }}>
                  Registare
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
