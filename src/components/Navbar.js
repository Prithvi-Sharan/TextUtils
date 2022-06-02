import React from "react";
import PropTypes from 'prop-types';
// import {a} from "react-router-dom";


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className={`nav-a text-${props.mode==='light'?'dark':'light'}`} active aria-current="page" href="#" style={{ textDecoration: 'none' }}>
                  Home
                </a>
              </li>
              {/* <li className="nav-item mx-2"> */}
                {/* <a className={`nav-a text-${props.mode==='light'?'dark':'light'}`} href="/about" style={{ textDecoration: 'none' }}>
                  {props.aboutText}
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes ={title:PropTypes.string.isRequired,
                   aboutText:PropTypes.string.isRequired}


Navbar.defaultProps ={title: 'Set Title here',
                      aboutText: 'About Text here'}