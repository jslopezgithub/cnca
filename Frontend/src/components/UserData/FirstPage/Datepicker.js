import React, { Component } from 'react';
import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';

export default class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log(e.sender.value());
    this.setState({
      dateTime: e.sender.value()
    });
  }

  render() {
    return (
      <div className='calender'>
        <div className='date-picker'>
          <DatePicker
            value={this.dateTime}
            min={new Date(2020, 1, 1)}
            min={new Date(2021, 1, 1)}
            format={'yyyy/MM/dd'}
            change={this.onChange}
          />
        </div>
      </div>
    );
  }
}
