import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'
import Resume from '../../../assets/pdfs/Resume2019Version.pdf';

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/Tommy2016x" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/carrascalt" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:carrascalx@gmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li className="icon">
            <a href={Resume} target="_blank">
              <i className="fa fa-file-text-o" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          @Tommy Carrascal 2019
        </div>
      </div>
    )
  }
}

export default Links