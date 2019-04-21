import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const opacityValue = this.props.opacity 
    let opac; 
    if (opacityValue >= 0.2){
      opac = <ColorBox opacity={opacityValue - .1} />
    } else {
      opac = null 
    }
    return (
      <div className="color-box" style={{ opacity: this.props.opacity }}>
      {opac}
      </div>

    )
  }
}
