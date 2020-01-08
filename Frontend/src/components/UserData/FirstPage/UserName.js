import React from 'react';
import './Username.css';
import Datepicker from './Datepicker';

export default function UserName() {
  const FirstName = 'First name';
  const SecondName = 'SecondName';
  return (
    <div className='UserName'>
      <Datepicker />
      <div className='nameInput'>
        <span>{FirstName}</span>
        <span>{SecondName}</span>
      </div>
    </div>
  );
}
