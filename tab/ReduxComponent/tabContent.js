import React, { Component, PorpTypes } from 'react'

export default class TabContent extends Component{
	render (){
		const tabIndex = this.props.tabIndex
		return (
			<div className="tab-content tab-bordered">
				{this.renderFilter(tabIndex) }
			</div>
		)
	}
	renderFilter(index) {
		console.log('render filter...')
		if(index == 1){
			return (
				<div className="tab-panel">
			      标签1的内容
			    </div>
			)
		}else if(index == 2){
			return (
				<div className="tab-panel">
			      标签2的内容
			    </div>
			)
		}
	}
}