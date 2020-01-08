import React from 'react';
import './Username.css';
import Datepicker from './Datepicker';

export default function UserName() {
  const FirstName = 'First name';
  const SecondName = 'SecondName';
  return (
<<<<<<< HEAD
    <span className="UserName">
      <div className="calender">
        <i className="fas fa-calendar-alt calenderIcon"></i>
      </div>
      <span className="nameInput">
||||||| merged common ancestors
    <div className='UserName'>
      <div className='calender'>
        <i className='fas fa-calendar-alt calenderIcon'></i>
      </div>
      <div className='nameInput'>
=======
    <div className='UserName'>
      <Datepicker />
      <div className='nameInput'>
>>>>>>> 5776e0b67524ec26426dcaae7756ae1bcbd57443
        <span>{FirstName}</span>
        <span>{SecondName}</span>
      </span>
    </span>
  );
}
