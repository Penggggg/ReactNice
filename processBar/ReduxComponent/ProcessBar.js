import React, {  Component, PropTypes } from 'react'

export default class ProcessBar extends Component {
  render() {
    //样式1
    const striped = this.props.isStriped ? ' progress-striped ' : ''
    const active = this.props.isActive ? ' active ' : ''
    const text = this.props.isText ? (this.props.processValue + '%') : ''
    const ProcessBarStyle = striped + active + ' progress '
    //样式2
    const ProcessColor = this.props.colorType + ' progress-bar '
    
    return (
      <div>
       	<div className={ProcessBarStyle}>
    			<div className={ProcessColor} role="progressbar" 
    				aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: this.props.processValue+'%'}}>{ text }</div>
    		  </div>
      </div>
    )
  }

}