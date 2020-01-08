import React from 'react';
import { Link } from 'react-router-dom';
import './UserInfo.css';

export default function Pagination() {
  return (
    <div>
      <ul className="paginationBody">
        <li>
          <a href="#" className="prev">
            ❬prev
          </a>
        </li>
        <li className="pageNumber active">
          <Link to="/home/firstpage">
            <p>1</p>
          </Link>
        </li>
        <li className="pageNumber">
          <Link to="/home/secondpage">
            <p>2</p>
          </Link>
        </li>
        <li className="pageNumber">
          <a href="#">
            <p>3</p>
          </a>
        </li>
        <li>
          <a href="#" className="next">
            next❭
          </a>
        </li>
      </ul>
    </div>
  );
}
