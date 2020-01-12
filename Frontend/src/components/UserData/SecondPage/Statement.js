import React from 'react';
import './Statement.css';

export default function Statement() {
  const Settimana = '13/11/2020';
  const SettimanaAl = '19/11/2020';
  const gironi = '';
  const totaleOre = '';
  return (
    <div className='StatementBox'>
      <div className='pargraph'>
        <p>SETTIMANA DAL </p>
        <p>GIRONI LAVORATIVI </p>
        <p>TOTALE ORE INDICATE</p>
      </div>
      <div className='whiteBox'>
        <div className='whiteSpace'>
          <p>{Settimana}</p>
        </div>
        <div className='whiteSpace'>
          <p>{gironi}</p>
        </div>
        <div className='whiteSpace'>
          <p>{totaleOre}</p>
        </div>
      </div>
      <div className='whiteBox4'>
        <p>{SettimanaAl}</p>
      </div>
      <span className='al'>
        <p>AL</p>
      </span>
    </div>
  );
}
