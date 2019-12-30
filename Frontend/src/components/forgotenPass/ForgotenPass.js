import React from 'react';
import './ForgotenPass.css';

export default function ForgotenPass() {
  return (
    <div id='mainContainer'>
      <div className='body'>
        <div className='dataBox'>
          <span className='inputs'>
            <input type='text' placeholder='E-Mail'></input>
          </span>
          <span className='btn'>
            <button>ottenere una nuova password</button>
          </span>
        </div>
      </div>
    </div>
  );
}
