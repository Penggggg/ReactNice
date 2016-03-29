
import React, {  Component, PropTypes } from 'react'

export default class ProcessStyle extends Component {
  render() {
    return (
      <div>
			<div className="form-group">
				<label>
					<input type="checkbox" checked={this.props.isStriped} onChange={() => this.changeStriped()} />
						斑马纹
				</label>
				<label>
					<input type="checkbox" checked={this.props.isText} onChange={() => this.changeText()} />
						显示文字
				</label>
				<label>
					<input type="checkbox" checked={this.props.isActive} onChange={() => this.changeActive()}/>
						动态
				</label>
			</div>
      </div>
    )
  }

  changeStriped(){
  	var oldValue =  this.props.isStriped;
  	this.props.onChangeStriped(!oldValue);
  }

  changeActive(){
  	var oldValue =  this.props.isActive;
  	this.props.onChangeActive(!oldValue);
  }

  changeText(){
  	var oldValue =  this.props.isText;
  	this.props.onChangeText(!oldValue);
  }



}