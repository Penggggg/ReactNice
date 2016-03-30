import React, { Component, PropTypes } from 'react'

export default class PanelBody extends Component{
	render() {
		return (
			<div>
				{this.renderFilter()}
			</div>			
		)
	}

	renderFilter(){
		if(this.props.isToggle){
			return (
				<div className="panel-body">
			      可折叠内容
			    </div>				
			)
		}else{
			return (
				<div></div>
			)
		}
	}
}