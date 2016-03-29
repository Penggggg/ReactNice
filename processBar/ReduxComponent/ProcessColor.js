import React, { Component, PropTypes } from 'react'

export default class ProcessColor extends Component {
  render() {
    return (
      <div>
        <label>
          风格：
            <select className="form-controll" ref="aa" onChange={() => this.changColor()}>
              <option value="progress-bar-success">progress-bar-success</option>
              <option value="progress-bar-info">progress-bar-info</option>
              <option value="progress-bar-warning">progress-bar-warning</option>
              <option value="progress-bar-danger">progress-bar-danger</option>
            </select>
        </label>          
      </div>
    )
  }

    changColor(){
      this.props.onChangeColor( this.refs.aa.value.trim() )
    }

}