import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default class Login extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div id="mainContainer">
        <div className="body">
          <div className="dataBoxcont">
            <form className="dataBoxcont2">
              <div className="inputs">
                <input type="email" placeholder="E-Mail" required></input>
                <div className="iconBackground">
                  <i className="Eicon fas fa-envelope"></i>
                </div>
                <input type="password" placeholder="password" required></input>
                <div className="iconBackground2">
                  <i className="Eicon2 fas fa-lock"></i>
                </div>
              </div>
              <div className="checkBox">
                <input type="checkbox" />
              </div>
              <p className="Resta">Resta collegato</p>
              <Link to="./home/firstpage">
                <button className="btn">ACCESSO</button>
              </Link>
              {/* ------------------------------Forget password  & Registration Links */}
              <div className="fpassword">
                <Link to="./forget-password" style={{ color: 'white' }}>
                  Hai dimenticato <br /> la password?
                </Link>
              </div>
              <div className="registare">
                <Link to="./sign-up" style={{ color: 'white' }}>
                  Registrare
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
