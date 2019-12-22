/* eslint-disable class-methods-use-this */
/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
// eslint-disable-next-line import/prefer-default-export
import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';

class Registration extends Component {
  render() {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div>
        {/* // eslint-disable-next-line react/react-in-jsx-scope */}

        <section className="hero is-medium ">
          <div className="box ">
            <div className="columns is-centered ">
              <div className="column is-half">
                <div className="field">
                  <label className="label has-text-centered">
                    Registration Form
                  </label>
                  {/* <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div> */}
                </div>

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-success"
                      type="text"
                      placeholder="Text input"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fa fa-check"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-danger"
                      type="email"
                      placeholder="Email input"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fa fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  <p className="help is-danger">This email is invalid</p>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Registration;
