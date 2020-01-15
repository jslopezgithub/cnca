/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';
import Datepicker from '../../../UserInfo/Datepicker';
import './Calenderbody.css';
import './Day1.css';

export default class Day1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_time: '',
      end_time: '',
      activity_type: ''
    };
  }

  handdleOnChange = e => {
    console.log(e);
    this.setState({
      ...this.state,
      [e.target.name]: [e.target.value],
      recived_data: this.props
    });
  };

  handdleOnSubmit = e => {
    e.preventDefault();

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
    // const date = '10/10';
    const totalTime = this.getTimeInterval(this.state);
    console.log(totalTime);
    // const day = "MERCOLEDI'";
    return (
      <form className="mainContainer1" onSubmit={this.handdleOnSubmit}>
        {/* ______________________________ day */}
        <div className="secondMainContainer">
          <div className="field ">
            <Datepicker />
          </div>

          {/* ______________________________ date */}

          {/* ______________________________ riposo */}

          {/* _____________________________ingresso */}

          {/* _____________________________ingresso time box */}
          <div className="time">
            <input
              className="timep1"
              type="time"
              name="start_time"
              min="06:00"
              max="18:00"
              value={this.state.start_time}
              onChange={this.handdleOnChange}
              required
            />
          </div>
          {/* _____________________________Usicta */}
          <div className="time">
            <input
              className="uscitap1"
              type="time"
              name="end_time"
              min="06:00"
              max="18:00"
              value={this.state.end_time}
              onChange={this.handdleOnChange}
              required
            />
          </div>
          {/* -----------------------------------------------------------Ingresso */}
          <div className="TotalTimeContainer">
            <p className="totalTime">{totalTime}</p>
          </div>

          {/* ----------------------------------------------------------------selezionare */}
          <div className="selezionare">
            <div className="firstbox">
              <div className="selectContainer">
                <div className="control">
                  <div>
                    <select
                      className="select"
                      name="activity_type"
                      value={this.state.activity_type}
                      onChange={this.handdleOnChange}
                      required
                    >
                      <option value="attivitÃ 1">attivitÃ 1</option>
                      <option>attivitÃ 2</option>
                      <option>attivitÃ 3 </option>
                      <option>ferie</option>
                      <option>malattia </option>
                      <option>Recupero ore lavoro in festivo</option>
                      <option>
                        Formazione Generale edit 8 Formazione Specifica
                      </option>
                      <option>Formazione FAD</option>
                      <option>PERMESSO str: donazione sangue</option>
                      <option>PERMESSO str: diritto di voto</option>
                      <option>PERMESSO str: testimone g</option>
                      <option>PERMESSO str: seggio elettorale</option>
                    </select>
                  </div>
                </div>
                {/* <p className="help is-success">Select your activity</p> */}
              </div>
            </div>
          </div>
          <div className="control">
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

// /* eslint-disable camelcase */
// /* eslint-disable class-methods-use-this */
// import React, { Component } from 'react';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import moment from 'moment';

// import './Calenderbody.css';
// import Datepicker from '../../../UserInfo/Datepicker';
// import './Day1.css';

// export default class Day1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       start_time: '',
//       end_time: '',
//       activity_type: '',
//       recived_data: '',
//       total_time: '00:00'
//     };
//   }

//   handdleOnChange = e => {
//     console.log(e);
//     this.setState({
//       ...this.state,
//       [e.target.name]: [e.target.value],
//       recived_data: this.props
//     });
//   };

//   handdleOnSubmit = e => {
//     e.preventDefault();
//     this.setState({ total_time: this.getTimeInterval() });
//     console.log(this.state);
//   };

//   _resetState = () => {
//     this.setState();
//   };

//   getTimeInterval = () => {
//     const { start_time, end_time } = this.state;
//     const start = moment(start_time, 'HH:mm');
//     const end = moment(end_time, 'HH:mm');
//     const minutes = end.diff(start, 'minutes');
//     const interval = moment()
//       .hour(0)
//       .minute(minutes);

//     return interval.format('HH:mm');
//   };

//   render() {
//     // const date = '10/10';
//     // const totalTime = '0:00';
//     // const day = "MERCOLEDI'";

//     return (
//       <form className="mainContainer1" onSubmit={this.handdleOnSubmit}>
//         <div className="box is-centered ">
//           <div className="field ">
//             <label className="label is-spaced">
//               Select date :<Datepicker />
//             </label>
//           </div>
//           <div>
//             <label className="label">Activities</label>
//             <div className="control">
//               <div>
//                 <select
//                   className="select"
//                   name="activity_type"
//                   value={this.state.activity_type}
//                   onChange={this.handdleOnChange}
//                   required
//                 >
//                   <option value="attivitÃ 1">attivitÃ 1</option>
//                   <option>attivitÃ 2</option>
//                   <option>attivitÃ 3 </option>
//                   <option>ferie</option>
//                   <option>malattia </option>
//                   <option>Recupero ore lavoro in festivo</option>
//                   <option>
//                     Formazione Generale edit 8 Formazione Specifica
//                   </option>
//                   <option>Formazione FAD</option>
//                   <option>PERMESSO str: donazione sangue</option>
//                   <option>PERMESSO str: diritto di voto</option>
//                   <option>PERMESSO str: testimone g</option>
//                   <option>PERMESSO str: seggio elettorale</option>
//                 </select>
//               </div>
//             </div>
//             <p className="help is-success">Select your activity</p>
//           </div>
//           <div>
//             <label className="label">Start Time</label>
//             <div className="control has-icons-left ">
//               <input
//                 className="input"
//                 type="time"
//                 name="start_time"
//                 min="06:00"
//                 max="18:00"
//                 value={this.state.start_time}
//                 onChange={this.handdleOnChange}
//                 required
//               />
//               <div className="icon is-small is-left">
//                 <i className="fas fa-clock"></i>
//               </div>
//             </div>
//             <p className="help is-success">
//               Your starting time for your activity
//             </p>
//           </div>
//           <div>
//             <label className="label">End Time</label>
//             <div className="control has-icons-left ">
//               <input
//                 className="input"
//                 type="time"
//                 name="end_time"
//                 min="06:00"
//                 max="18:00"
//                 value={this.state.end_time}
//                 onChange={this.handdleOnChange}
//                 required
//               />
//               <div className="icon is-small is-left">
//                 <i className="fas fa-clock"></i>
//               </div>
//             </div>
//             <p className="help is-success">
//               Your finishing time for your activity
//             </p>
//           </div>
//           <div>
//             <label className="label">Total Time</label>
//             <div className="control has-icons-left ">
//               <input
//                 className="input"
//                 type="text"
//                 value={this.state.total_time}
//                 readOnly
//               />
//               <div className="icon is-small is-left">
//                 <i className="fas fa-clock"></i>
//               </div>
//             </div>
//             <p className="help is-success">
//               This is your current total activity
//             </p>
//           </div>
//           <vr />{' '}
//         </div>
//         <div className="field is-grouped">
//           <div className="control">
//             <button type="submit" className="button is-link">
//               Submit
//             </button>
//           </div>
//           <div className="control">
//             <button
//               className="button is-link is-danger"
//               // eslint-disable-next-line no-underscore-dangle
//               onClick={this._resetState}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </form>
//     );
//   }
// }
