import React from 'react';
import './Registration.css';

export default function Registration() {
  return (
    <div id='registrationContainer'>
      <div className='registrationBody'>
        <div className='regesrdataBox'>
          <div className='registerRightSide'>
            <span className='inputs'>
              <input type='text' placeholder='Nome'></input>
              <input type='text' placeholder='Cognome'></input>
              <input type='text' placeholder='E-mail'></input>
              <input type='password' placeholder='Password'></input>
              <input type='password' placeholder='Ripeti Password'></input>
            </span>
            <span className='registerbtn'>
              <button> Iscriviti</button>
            </span>
          </div>
          <div className='sideBox'> </div>
        </div>
      </div>
    </div>
  );
}
