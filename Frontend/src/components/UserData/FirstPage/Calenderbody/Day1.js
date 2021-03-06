/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// eslint-disable-next-line import/named
// import { UserActivity } from '../../../../UserInfo-service';
import './Calenderbody.css';
import './Day1.css';

export default class Day1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: new Date(),
      start_time: '',
      end_time: '',
      activity_type: '',
      activity_type_id: [],
      totalTime: [],
      loading: false,
      datas: ''
    };
  }

  componentDidMount() {
    return axios
      .get('http://localhost:5000/api/activities/types')
      .then(res => this.setState({ datas: res.data, loading: true }))
      .catch(err => {
        // eslint-disable-next-line no-unused-expressions
        `oops u got this ${err}`;
      });
  }

  handleOnChange = e => {
    // console.log(e);
    this.setState({
      ...this.state,
      [e.target.name]: [e.target.value]
    });
  };

  handleChangeTime = date => {
    this.setState({
      start_date: date
    });
    //  console.log(this.state);
  };

  handleOnSelectActivity = e => {
    const jj = this.state.datas
      .filter(milley => milley.nome === e.target.value)
      .map(k => k.id);
    this.setState({
      ...this.state,
      [e.target.name]: [e.target.value],
      activity_type_id: jj,
      totalTime: this.getTimeInterval(this.state)
    });
    console.log(jj);
  };

  handleOnSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    this.props.dailyData(this.state);
    console.log(this.state);
  };

  getTimeInterval = e => {
    const { start_time, end_time } = e;
    const start = moment(start_time, 'HH:mm');
    const end = moment(end_time, 'HH:mm');
    const minutes = end.diff(start, 'minutes');
    const interval = moment()
      .hour(0)
      .minute(minutes);
    return interval.format('HH:mm');
  };

  render() {
    const lists = this.state.datas;
    console.log(this.state.datas);
    const totalTime = this.getTimeInterval(this.state);

    return (
      <form className="mainContainer1" onSubmit={this.handleOnSubmit}>
        {/* ______________________________ day */}
        <div className="secondMainContainer">
          <div className="field ">
            <label>SELEZIONA DATA</label>
            <DatePicker
              name="start_date"
              selected={this.state.start_date}
              onChange={this.handleChangeTime}
              style={{ width: '15px !important' }}
            />
          </div>

          {/* ______________________________ date */}

          {/* ______________________________ riposo */}

          {/* _____________________________ingresso */}

          {/* _____________________________ingresso time box */}
          <div className="time">
            <label>INGRESSO</label>
            <input
              className="timep1"
              type="time"
              name="start_time"
              min="06:00"
              max="18:00"
              value={this.state.start_time}
              onChange={this.handleOnChange}
              required
            />
          </div>
          {/* _____________________________Usicta */}
          <div className="time">
            <label>USCITA</label>
            <input
              className="uscitap1"
              type="time"
              name="end_time"
              min="06:00"
              max="18:00"
              value={this.state.end_time}
              onChange={this.handleOnChange}
              required
            />
          </div>
          {/* -----------------------------------------------------------Ingresso */}
          <div className="TotalTimeContainer">
            <label>ORE TOTALI</label>
            <p className="totalTime">{totalTime}</p>
          </div>

          {/* ----------------------------------------------------------------selezionare */}
          <div className="selezionare">
            <div className="firstbox">
              <div className="selectContainer">
                <div className="control">
                  <label>SELEZIONA ATTIVITÀ</label>
                  <div>
                    <select
                      className="select"
                      name="activity_type"
                      value={this.state.activity_type}
                      onChange={this.handleOnSelectActivity}
                      required
                      // eslint-disable-next-line react/jsx-no-comment-textnodes
                    >
                      // eslint-disable-next-line valid-typeof
                      {this.state.loading ? (
                        lists.map((e, i) => <option key={i}>{e.nome}</option>)
                      ) : (
                        <option>Loading</option>
                      )}
                    </select>
                  </div>
                </div>
                {/* <p className="help is-success">Select your activity</p> */}
              </div>
            </div>
          </div>
          <div className="controll">
            {' '}
            <button type="submit" className="button is-link">
              Submit{' '}
            </button>{' '}
          </div>
        </div>
      </form>
    );
  }
}
