import React, { Component } from 'react';
import './Registration.css';

// import Register from '../../UserInfo-service';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Nome: '',
      Cognome: '',
      Email: '',
      Password: '',
      RipetiPassword: ''
    };
  }

  UpdateState = e => {
    this.setState({ ...this.state, [e.target.name]: [e.target.value] });
    // console.log(this.state);
  };

  // handleOnsubmit = e => {
  //   e.preventDefault();
  //   Register(this.state);
  // };

  render() {
    return (
      <div id="registrationContainer">
        <div className="registrationBody">
          <form className="regesrdataBox" onSubmit={this.handleOnsubmit}>
            <div className="registerRightSide">
              <span className="inputs">
                <input
                  type="text"
                  placeholder="Nome"
                  name="Nome"
                  value={this.state.Nome}
                  onChange={this.UpdateState}
                ></input>
                <input
                  type="text"
                  placeholder="Cognome"
                  name="Cognome"
                  value={this.state.Cognome}
                  onChange={this.UpdateState}
                ></input>
                <input
                  type="text"
                  placeholder="E-mail"
                  name="Email"
                  value={this.state.Email}
                  onChange={this.UpdateState}
                ></input>
                <input
                  type="password"
                  placeholder="Password"
                  name="Password"
                  value={this.state.Password}
                  onChange={this.UpdateState}
                ></input>

                <input
                  type="password"
                  placeholder="Ripeti Password"
                  name="RipetiPassword"
                  onChange={this.UpdateState}
                  value={this.state.RipetiPassword}
                ></input>
              </span>
            </div>
            <span className="registerbtn">
              <button type="submit"> Iscriviti</button>
            </span>
            <div className="sideBox"></div>
          </form>
        </div>
      </div>
    );
  }
}
export default Registration;
