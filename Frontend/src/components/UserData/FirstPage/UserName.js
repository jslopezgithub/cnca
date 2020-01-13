/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React from 'react';
import './Username.css';
// import Datepicker from './Datepicker';

export default function UserName(props) {
  console.log(props);
  const { NOME, COGNOME } = props.userName;
  // eslint-disable-next-line no-lone-blocks
  // {
  //   if (NOME) {
  //     return NOME.toLowerCase()
  //       .split()[0]
  //       .toUperCase()
  //       .join(' ');
  //   }
  // }
  // NOME.toLowerCase()
  //   .split()
  return (
    <div className="UserName">
      {/* <Datepicker /> */}
      <div className="nameInput">
        <span>First Name :{NOME}</span>
        <span>Last Name :{COGNOME}</span>
      </div>
    </div>
  );
}
