import React from 'react';
import './TotalHours.css';

export default function TotalHours() {
  const totalHours = '00:00';
  const settimanaTime = 5;
  return (
    <div className='MainTotalHours'>
      <p className='TotalHours'>TOTALE ORE INDICATE</p>
      <span className='timecontainer'>{totalHours}</span>
      <span className='settimana'>
        settimana
        <span className='settimanaTime'>{settimanaTime}</span>
      </span>
    </div>
  );
}
