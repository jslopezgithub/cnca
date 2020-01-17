/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default-member
// import InputIntry from './InputIntry';
// import Pagination from './Pagination';
import './UserInfo.css';
import 'bulma/css/bulma.css';
import UserImg from './UserImg';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NOME: '',
      COGNOME: '',
      ORGANIZZAZIONE: '',
      SVOLGIMENTO: '',
      attività1: '',
      attività2: '',
      attività3: ''
    };
  }

  UpdateState = e => {
    this.setState({
      ...this.state,
      [e.target.name]: [e.target.value]
    });
  };

  render() {
    return (
      <form className="maincontainer">
        <UserImg />
        <div className="userinfo">
          <p>NOME</p>
          {/* <InputIntry /> */}
          <input
            type="text"
            className="inputa editview"
            name="NOME"
            value={this.state.NOME}
            onChange={this.UpdateState}
          />
          <p>COGNOME</p>
          <input
            type="text"
            className="inputa editview"
            name="COGNOME"
            value={this.state.COGNOME}
            onChange={this.UpdateState}
          />
          {/* <InputIntry /> */}
          <p>ORGANIZZAZIONE</p>
          <input
            type="text"
            className="inputa editview"
            name="ORGANIZZAZIONE"
            value={this.state.ORGANIZZAZIONE}
            onChange={this.UpdateState}
          />
          {/* <InputIntry /> */}
          <p>SEDE DO SVOLGIMENTO</p>
          <input
            type="text"
            className="inputa editview"
            name="SVOLGIMENTO"
            value={this.state.SVOLGIMENTO}
            onChange={this.UpdateState}
          />
          {/* <InputIntry /> */}
          <p>DEFINIZIONE attività 1</p>
          <input
            type="text"
            className="inputa editview"
            name="attività1"
            value={this.state.attività1}
            onChange={this.UpdateState}
          />
          {/* <InputIntry /> */}
          <p>DEFINIZIONE attività 2</p>
          <input
            type="text"
            className="inputa editview"
            name="attività2"
            value={this.state.attività2}
            onChange={this.UpdateState}
          />
          {/* <InputIntry /> */}
          <p>DEFINIZIONE attività 3</p>
          <input
            type="text"
            className="inputa editview"
            name="attività3"
            value={this.state.attività3}
            onChange={this.UpdateState}
          />
          {/* <InputIntry /> */}
          <div>
            <input
              type="button"
              className="inputa editview"
              name="attività3"
              value="Continue"
              style={{ backgroundColor: 'Blue', color: 'White' }}
              // disabled={!this.isFormValid}
              onClick={() =>
                // eslint-disable-next-line react/prop-types
                this.props.action(this.state)
              }
            />
          </div>
        </div>

        {/* <Pagination /> */}
      </form>
    );
  }
}
