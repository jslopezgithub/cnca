// /* eslint-disable class-methods-use-this */
// import React, { Component } from 'react';
// // import { Redirect } from 'react-router-dom';
// import './Homepage.css';

// export default class LoginUser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       CodiceFiscale: '',
//       Password: ''
//     };
//   }

//   handleOnChange = e => {
//     this.setState({
//       ...this.state,
//       [e.target.name]: [e.target.value]
//     });
//   };

//   handleOnSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <label
//             className="modal-close is-large"
//             htmlFor="element-toggle"
//           ></label>
//         </div>

//         <div className="loginButton">
//           <label className="button " htmlFor="element-toggle">
//             Login As User
//           </label>
//           <input id="element-toggle" type="checkbox" />
//           <div className="modal is-large" id="myModal">
//             <div className="modal-background"></div>
//             <div className="modal-card">
//               <header className="modal-card-head">
//                 <p className="modal-card-title has-text-centered ">
//                   Login As User
//                 </p>
//               </header>
//               <section className="modal-card-body ">
//                 <form className="form " onSubmit={this.handleOnSubmit}>
//                   <p className="control has-icons-left has-icons-right">
//                     <input
//                       className="input"
//                       type="text"
//                       name="CodiceFiscale"
//                       // value={this.state.CodiceFiscale}
//                       onChange={this.handleOnChange}
//                       placeholder="Codicefiscale"
//                       required
//                     />
//                     <span className="icon is-small is-left">
//                       <i className="fas fa-envelope"></i>
//                     </span>
//                     <span className="icon is-small is-right">
//                       <i className="fas fa-check"></i>
//                     </span>
//                   </p>

//                   <p className="control has-icons-left">
//                     <input
//                       className="input"
//                       type="password"
//                       name="Password"
//                       // value={this.state.Password}
//                       onChange={this.handleOnChange}
//                       placeholder="Password"
//                       required
//                     />
//                     <span className="icon is-small is-left">
//                       <i className="fas fa-lock"></i>
//                     </span>
//                   </p>

//                   <p className="control">
//                     {/* <Link to="./home/firstpage"> */}
//                     <input
//                       type="submit"
//                       id="button"
//                       className="button is-success"
//                       value=" Login"
//                     ></input>
//                     {/* </Link> */}
//                   </p>
//                 </form>
//               </section>
//               <label
//                 className="modal-close is-large"
//                 htmlFor="element-toggle"
//               ></label>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// /* eslint-disable class-methods-use-this */
// import React, { Component } from 'react';
// import './Homepage.css';

// export default class LoginAdmin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Email: '',
//       Password: ''
//     };
//   }

//   handleOnChange = e => {
//     this.setState({
//       ...this.state,
//       [e.target.name]: [e.target.value]
//     });
//   };

//   handleOnSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <label
//             className="modal-close is-large"
//             htmlFor="element-toggle"
//           ></label>
//         </div>

//         <div className="loginButton">
//           <label className="button" htmlFor="element-toggle">
//             Login As Admin
//           </label>
//           <input id="element-toggle" type="checkbox" />
//           <div className="modal is-large" id="myModal">
//             <div className="modal-background"></div>
//             <div className="modal-card">
//               <header className="modal-card-head">
//                 <p className="modal-card-title has-text-centered ">
//                   Login As Admin
//                 </p>
//               </header>
//               <section className="modal-card-body ">
//                 <form className="form " onSubmit={this.handleOnSubmit}>
//                   <p className="control has-icons-left has-icons-right">
//                     <input
//                       className="input"
//                       type="email"
//                       name="Email"
//                       // value={this.state.CodiceFiscale}
//                       onChange={this.handleOnChange}
//                       placeholder="Email"
//                       required
//                     />
//                     <span className="icon is-small is-left">
//                       <i className="fas fa-envelope"></i>
//                     </span>
//                     <span className="icon is-small is-right">
//                       <i className="fas fa-check"></i>
//                     </span>
//                   </p>

//                   <p className="control has-icons-left">
//                     <input
//                       className="input"
//                       type="password"
//                       name="Passord"
//                       // value={this.state.CodiceFiscale}
//                       onChange={this.handleOnChange}
//                       placeholder="Password"
//                       required
//                     />
//                     <span className="icon is-small is-left">
//                       <i className="fas fa-lock"></i>
//                     </span>
//                   </p>

//                   <p className="control">
//                     {/* <Link to="./home/firstpage"> */}
//                     <input
//                       type="submit"
//                       id="button"
//                       className="button is-success"
//                       value=" Login"
//                     ></input>
//                     {/* </Link> */}
//                   </p>
//                 </form>
//               </section>
//               <label
//                 className="modal-close is-large"
//                 htmlFor="element-toggle"
//               ></label>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// #element-toggle {
//   display: none;
// }
// #element-toggle:checked ~ #myModal {
//   display: flex;
// }
// .modal-content,
// .modal-card {
//   align-items: center !important;
// }
// #flexButton {
//   display: flex;
// }
// .loginButton {
//   padding: 30px;
// }
// .modal-card-head {
//   width: 50vh !important;
//   background-image: url(../../Images/hero.jpg);
// }
// .modal-card-title {
//   color: white !important;
// }
// .modal-card-body {
//   height: 44vh !important;
//   width: 50vh !important;
//   padding: 50px !important;
//   background-image: url(../../Images/hero.jpg);
// }
// #button {
//   margin-top: 15px !important;
// }
// .control {
//   margin: 0.5em;
//   background-image: url(../../Images/hero.jpg);
// }
// .navbox {
//   margin: 38px 20px 0px 0px !important;
//   height: fit-content !important;
//   border: 0.5px solid rgb(221, 217, 217);
//   border-radius: 5px 5px 5px 5px !important;
// }
// .selected {
//   background-color: #00d1b2;
//   color: white !important;
// }
// .button:hover,
// .navbox:hover {
//   background-color: #00d1b2 !important;
//   color: white !important;
// }
// import React from 'react';
// // import HomePage from '../Homepage/Homepage';
// import LoginUser from '../Home/LoginUser';
// import LoginAdmin from '../Home/LoginAdmin';

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar" role="navigation" aria-label="main navigation">
//         <div className="navbar-brand">
//           <a className="navbar-item" href="https://bulma.io">
//             <img src="/Images/bg.png" alt="Logo" width="112" height="28" />
//           </a>

//           <a
//             role="button"
//             className="navbar-burger burger"
//             aria-label="menu"
//             aria-expanded="false"
//             data-target="navbarBasicExample"
//           >
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//           </a>
//         </div>

//         <div id="navbarBasicExample" className="navbar-menu">
//           <div className="navbar-start">
//             <a className="navbar-item selected navbox ">About</a>
//             <a className="navbar-item navbox">Contact</a>
//           </div>

//           <div className="navbar-end">
//             <div className="navbar-item">
//               <LoginUser />
//               <LoginAdmin />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
