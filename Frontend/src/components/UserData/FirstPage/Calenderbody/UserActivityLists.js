/* eslint-disable valid-typeof */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/named */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import UserActivity from '../../../../UserInfo-service';

export default class UserActivityLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity_type: 'Select Activity',
      activity_type_id: ''
    };
  }

  handdleOnChange = e => {
    console.log(e.target.value);
    console.log(UserActivity());

    const jj = UserActivity()
      .filter(milley => milley.name === e.target.value)
      .map(k => k.id);
    console.log(jj);

    this.setState({
      ...this.state,
      [e.target.name]: [e.target.value],
      activity_type_id: jj
    });
  };

  //

  render() {
    const lists = UserActivity();
    console.log(lists);
    return (
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
                // eslint-disable-next-line react/jsx-no-comment-textnodes
              >
                // eslint-disable-next-line valid-typeof
                {lists.map((e, i) => (
                  <option key={i}>{e.name}</option>
                ))}
              </select>
            </div>
          </div>
          {/* <p className="help is-success">Select your activity</p> */}
        </div>
      </div>
    );
  }
}
