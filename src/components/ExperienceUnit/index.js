import React, { Component } from 'react'

import './style.scss'

class ExperienceUnit extends Component {
  render() {
    const position = this.props.position ? <div className="time-period">
    <strong>{this.props.position}</strong>
  </div> : null;
    return (
      <div className="experience-unit col-xs-12 col-sm-6 col-md-4">
        <a href={this.props.link} target="_blank">
          <div
            className="image"
            style={{
              backgroundImage: `url(${this.props.logo})`,
              backgroundColor: this.props.colour
            }}>
          </div>
        </a>
        <div className="title bold">
          {this.props.title}
        </div>
        {position}
        <div className="time-period">
          {this.props.timeperiod}
        </div>
        <div className="subtitle">
          {this.props.subtitle}
        </div>
      </div>
    )
  }
}

export default ExperienceUnit
