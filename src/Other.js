import React, { Component } from 'react'

class Other extends Component {
    render () {
        return (
          <div className="small-6 medium-3 columns other-article">
          <a href="#">
            <img src={this.props.imgsrc} alt={this.props.imgalt} />
            <p>{this.props.text}</p>
          </a>
        </div>
        )
    }
}

export default Other