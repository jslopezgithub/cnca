/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import TotalHours from './TotalHours';
import TotalTime from './TotalTime';
import UserName from './UserName';
import Day1 from './Calenderbody/Day1';

// import Columns from './columns';
import './FirstPage.css';

export default function FirstPage(props) {
  return (
    <div className="FirstPage">
      <TotalHours />
      <UserName {...props} />
      <TotalTime />
      <div className="daystyling"></div>
      <div className="ingressobox">INGRESSO</div>
      <div className="uscitabox">USCITA</div>
      <Day1 />
    </div>
  );
}
