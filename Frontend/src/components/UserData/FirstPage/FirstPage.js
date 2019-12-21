import React from 'react';
import Calender from './Calender';
import Days from './Days';
import TotalHours from './TotalHours';
import TotalTime from './TotalTime';
import UserName from './UserName';
// import Columns from "./columns";
import './FirstPage.css';

export default function FirstPage() {
  return (
    <div className='FirstPage'>
      <Calender />
      <Days />
      <TotalHours />
      <TotalTime>Hello from total time</TotalTime>
      <UserName />
      {/* // <Columns /> */}
      <div className='block'>
        <nav className='pagination is-rounded is-small'>
          <a href='' className='pagination-previous pevious' disabled>
            Previous
          </a>
          <a href='' className='pagination-next is-danger next'>
            Next Page
          </a>
          <ul className='pagination-list listnumber content is-small'>
            <li>
              <a href='' className='pagination-link is-current'>
                1
              </a>
              <a href='' className='pagination-link'>
                2
              </a>
              <a href='' className='pagination-link'>
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
