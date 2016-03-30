import React, { Component, PropTypes } from 'react'

export default class PanelHead extends Component{
	render() {
		//样式1
		var toggleStyle = this.props.isToggle ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down'
		return (
			<div className="">
				<div className="panel-heading">
				    <h4 className="panel-title">
				      <span className="glyphicon glyphicon-th-list"></span>
				      点右侧的图标折叠/展开
				      <span className="pull-right">
					      <span  className={toggleStyle} onClick={ () => this.toggleHandler() }></span>
					        &nbsp;
					      <span className="glyphicon glyphicon-remove" onClick={ () => this.closeHandler() }></span>
				      </span>
				    </h4>
				 </div>
			</div>
		)
	}
		toggleHandler() {
			this.props.onToggleChange(!this.props.isToggle)
		}

		closeHandler() {
			this.props.onCloseChange(true)
		}
}