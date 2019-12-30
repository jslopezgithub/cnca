import React from 'react';
import './Username.css';

export default function UserName() {
  const FirstName = 'First name';
  const SecondName = 'SecondName';
  return (
    <div className='UserName'>
      <div className='calender'>
        <i className='fas fa-calendar-alt calenderIcon'></i>
      </div>
      <div className='nameInput'>
        <span>{FirstName}</span>
        <span>{SecondName}</span>
      </div>
    </div>
  );
}
