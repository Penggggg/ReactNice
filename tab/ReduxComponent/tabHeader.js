import React, { Component, PorpTypes } from 'react'

export default class TabHeader extends Component {
	render (){
		const active = this.props.tabIndex 
		return (
			<div>
				<ul className="nav nav-tabs">
					<li onClick={() => this.clickTabs(1)} className={this.getClass(1)}><a >标签1</a></li>
					<li onClick={() => this.clickTabs(2)} className={this.getClass(2)}><a >标签2</a></li>
				  </ul>
			</div>
		)
	}

	getClass(index){
		return index == this.props.tabIndex ? 'active' : ''
	}

	clickTabs(index) {
		this.props.onClickTab(index)
	}

}
