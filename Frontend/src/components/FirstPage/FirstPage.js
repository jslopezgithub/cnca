/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import SecondCompMain from './secondComponent/SecondCompMain';
import Days from './Days';
import TotalHours from './TotalHours';
import TotalTime from './TotalTime';
import './FirstPage.css';
import UserInfoMain from '../Shared/userInfo/UserInfoMain';

export default function FirstPage() {
  return (
    <div className="FirstPage">
      <UserInfoMain />
      <SecondCompMain />
      <Days />
      <TotalHours />
      <TotalTime>Hello from total time</TotalTime>

      <div className="block">
        <nav className="pagination is-rounded is-small">
          <a href="#" className="pagination-previous pevious" disabled>
            Previous
          </a>
          <a href="#" className="pagination-next is-danger next">
            Next Page
          </a>
          <ul className="pagination-list listnumber content is-small">
            <li>
              <a href="#" className="pagination-link is-current">
                1
              </a>
              <a href="#" className="pagination-link">
                2
              </a>
              <a href="#" className="pagination-link">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
