/* eslint-disable import/no-unresolved */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import TotalHours from '../../FirstPage/TotalHours';
import TotalTime from './TotalTime';
import UserName from './UserName';
import Day1 from './Calenderbody/Day1';
import Day2 from './Calenderbody/Day2';
import Day3 from './Calenderbody/Day3';
import Day4 from './Calenderbody/Day4';
import Day5 from './Calenderbody/Day5';
import Day6 from './Calenderbody/Day6';
import Day7 from './Calenderbody/Day7';
// import Columns from "./columns";
// import '../../FirstPage/FirstPage.css';

export default function FirstPage() {
  return (
    <div className="FirstPage">
      <TotalHours />
      <UserName />
      <TotalTime />
      <div className="daystyling"></div>
      <div className="ingressobox">INGRESSO</div>
      <div className="uscitabox">USCITA</div>
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
      <Day7 />
    </div>
  );
}
