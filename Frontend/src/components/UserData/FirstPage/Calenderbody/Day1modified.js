import React, { Component } from 'react';
import Datepicker from '../../../UserInfo/Datepicker';
import './Day1modified.css';

export default class Day1modified extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="box is-centered ">
        <h1 className="title is-1">Daily CNCA employer activity</h1>
        <div className="field ">
          <label className="label is-spaced">
            Select date :
            <Datepicker />
          </label>
        </div>
        <label className="label">Activities</label>
        <div className="control">
          <div className="select" required>
            <select>
              <option>attivitÃ 1</option>
              <option>attivitÃ 2</option>
              <option>attivitÃ 3 </option>
              <option>ferie</option>
              <option>malattia </option>
              <option>Recupero ore lavoro in festivo</option>
              <option>Formazione Generale edit 8 Formazione Specifica</option>
              <option>Formazione FAD</option>
              <option>PERMESSO str: donazione sangue</option>
              <option>PERMESSO str: diritto di voto</option>
              <option>PERMESSO str: testimone g</option>
              <option>PERMESSO str: seggio elettorale</option>
            </select>
          </div>
        </div>
        <p className="help is-success">Select your activity</p>
        <label className="label">Start Time</label>
        <div className="control has-icons-left ">
          <input
            className="input"
            type="time"
            min="06:00"
            max="18:00"
            required
          />
          <span className="icon is-small is-left">
            <i className="fas fa-clock"></i>
          </span>
        </div>
        <p className="help is-success">Your starting time for your activity</p>
        <label className="label">End Time</label>
        <div className="control has-icons-left ">
          <input
            className="input"
            type="time"
            min="06:00"
            max="18:00"
            required
          />
          <span className="icon is-small is-left">
            <i className="fas fa-clock"></i>
          </span>
        </div>
        <p className="help is-success">Your finishing time for your activity</p>
        <label className="label">Total Time</label>
        <div className="control has-icons-left ">
          <input
            className="input"
            type="time"
            min="06:00"
            max="18:00"
            readOnly
          />
          <span className="icon is-small is-left">
            <i className="fas fa-clock"></i>
          </span>
        </div>
        <p className="help is-success">This is your current total activity</p>
        <br />
        <h6 className="title is-6">Signature _______________</h6>
        <br />
        <hr />{' '}
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-danger">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
