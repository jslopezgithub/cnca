/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable class-methods-use-this */
/* eslint-disable eqeqeq */
/* eslint-disable valid-typeof */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'bulma/css/bulma.css';
// import UserActivity from '../../../UserInfo-service';

export default class TotalTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      weeklyDatas: ''
    };
  }

  componentDidMount() {
    return axios
      .get(
        'http://localhost:5000/api/activities?volunteer=1&start_date=2019-02-12&end_date=2019-06-12'
      )
      .then(res =>
        this.setState({
          weeklyDatas: res.data.data,
          loading: true
        })
      )
      .catch(err => {
        // eslint-disable-next-line no-unused-expressions
        `oops u got this ${err}`;
      });
  }

  // eslint-disable-next-line eqeqeq
  getTotal = stEd =>
    // const intervatTime =
    stEd.map(e => {
      const start = moment(e.start_time, 'HH:mm:ss');
      console.log(e.start_time);
      const end = moment(e.end_time, 'HH:mm:ss');
      console.log(e.end_time);
      const minutes = end.diff(start, 'minutes');
      const interval = moment()
        .hour(0)
        .minute(minutes);
      return interval.format('HH:mm:ss');
    });
  // return intervatTime;

  checkingTypeAttivi = dataType => {
    console.log(dataType);
    const maindata = Object.values(dataType).filter(
      e =>
        e.activity_type_id == 1 ||
        e.activity_type_id == 2 ||
        e.activity_type_id == 3
    );
    const totaltimeMain = this.getTotal(maindata);
    const tT = totaltimeMain.reduce(
      (acc, time) => acc.add(moment.duration(time)),
      moment.duration()
    );
    return [Math.floor(tT.hours()), tT.minutes(), tT.seconds()].join(':');
  };

  checkingTypeFeri = dataType => {
    const maindata = Object.values(dataType).filter(
      e => e.activity_type_id == 4
    );
    const totaltimeMain = this.getTotal(maindata);
    const tT = totaltimeMain.reduce(
      (acc, time) => acc.add(moment.duration(time)),
      moment.duration()
    );
    return [Math.floor(tT.hours()), tT.minutes(), tT.seconds()].join(':');
  };

  checkingTypeForm = dataType => {
    console.log(dataType);
    const maindata = Object.values(dataType)
      .filter(
        e =>
          e.activity_type_id == 7 ||
          e.activity_type_id == 8 ||
          e.activity_type_id == 9
      )
      .map(e => {
        const start = moment(e.start_time, 'HH:mm:ss');
        console.log(e.start_time);
        const end = moment(e.end_time, 'HH:mm:ss');
        console.log(e.end_time);
        const minutes = end.diff(start, 'minutes');
        const interval = moment()
          .hour(0)
          .minute(minutes);
        return interval.format('HH:mm:ss');
      });
    const tT = maindata.reduce(
      (acc, time) => acc.add(moment.duration(time)),
      moment.duration()
    );
    return [Math.floor(tT.hours()), tT.minutes(), tT.seconds()].join(':');
  };

  checkingTypePerm = dataType => {
    console.log(dataType);
    const maindata = Object.values(dataType).filter(
      e =>
        e.activity_type_id == 10 ||
        e.activity_type_id == 11 ||
        e.activity_type_id == 12 ||
        e.activity_type_id == 13
    );
    const totaltimeMain = this.getTotal(maindata);
    const tT = totaltimeMain.reduce(
      (acc, time) => acc.add(moment.duration(time)),
      moment.duration()
    );
    return [Math.floor(tT.hours()), tT.minutes(), tT.seconds()].join(':');
  };

  checkingTypeMalat = dataType => {
    console.log(dataType);
    const maindata = Object.values(dataType).filter(
      e => e.activity_type_id == 5
    );
    const totaltimeMain = this.getTotal(maindata);
    const tT = totaltimeMain.reduce(
      (acc, time) => acc.add(moment.duration(time)),
      moment.duration()
    );
    return [Math.floor(tT.hours()), tT.minutes(), tT.seconds()].join(':');
  };
  // const id = props.totalTimeDaily;
  // console.log(id.totalTime);

  render() {
    const { weeklyDatas } = this.state;
    console.log(this.state);
    const ATTITVITA = this.checkingTypeAttivi(weeklyDatas);
    console.log(ATTITVITA);
    const PERMES = this.checkingTypePerm(weeklyDatas);
    console.log(PERMES);
    const FORM = this.checkingTypeForm(weeklyDatas);
    console.log(FORM);
    const FERI = this.checkingTypeFeri(weeklyDatas);
    console.log(FERI);
    const MALAT = this.checkingTypeMalat(weeklyDatas);
    console.log(MALAT);
    return (
      <div
        style={{
          position: 'absolute',
          justifyContent: 'space-around',
          top: '63%',
          right: '16%',
          width: '70%',
          fontSize: 15
        }}
        className="tablesizing table__wrapper maintable  table-cell-border content is-large "
      >
        <table className="tablesizing table is-bordered pricing__table is-large">
          <tr>
            <th className="tg-a46p is-light">ORE ATTITVITA</th>

            <th className="tg-0pky">{!ATTITVITA ? '00:00' : ATTITVITA}</th>

            <th className="tg-0pky">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </th>
            <th className="tg-0pky is-warning">
              {!ATTITVITA ? '00:00' : ATTITVITA}
            </th>
          </tr>
          <tr>
            <td className="tg-xgic is-danger">MALATTIA</td>
            <td className="tg-0pky">{!MALAT ? '00:00' : MALAT}</td>
            <td className="tg-0pky"></td>
            <td className="tg-0pky is-warning">{!MALAT ? '00:00' : MALAT}</td>
          </tr>
          <tr>
            <td className="tg-wf0n is-info">FERIE</td>
            <td className="tg-0pky"> {!FERI ? '00:00' : FERI}</td>
            <td className="tg-0pky"></td>
            <td className="tg-0pky is-warning">{!FERI ? '00:00' : FERI}</td>
          </tr>
          <tr>
            <td className="tg-yal4 is-success">PREMESSI STR</td>
            <td className="tg-0pky">{!PERMES ? '00:00' : PERMES}</td>
            <td className="tg-0pky"></td>
            <td className="tg-0pky is-success">{!PERMES ? '00:00' : PERMES}</td>
          </tr>
          <tr>
            <td className="tg-yal4 is-warning">FORMAZIONE</td>
            <td className="tg-0pky font">{!FORM ? '00:00' : FORM}</td>
            <td className="tg-0pky"></td>
            <td className="tg-0pky is-success">{!FORM ? '00:00' : FORM}</td>
          </tr>
          <tr>
            <td
              style={{
                position: 'absolute',
                justifyContent: 'space-around',
                width: '100%',
                right: '.02%',
                textAlign: 'center',
                fontSize: 10,
                border: 'solid green .1px'
              }}
              className="tg-0pky is-success totalHoursInbox"
            >
              0:00
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
