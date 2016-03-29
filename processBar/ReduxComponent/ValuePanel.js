import React, { Component, PropTypes } from 'react'

export default class ValuePanel extends Component {
	render() {
		return (
			<div>
				<h3>选项</h3>
				<label>
					进度：
					<input type="number" ref='valueInput' onChange={() => this.changeValueByInput()} 
						value={this.props.processValue} max='100' min='0' />
				</label>
				<div className ="btn-group">
					<button className ="btn btn-primary" onClick={() => this.changeValueByBtn(20)} >20%</button>
					<button className ="btn btn-primary" onClick={() => this.changeValueByBtn(40)} >40%</button>
					<button className ="btn btn-primary" onClick={() => this.changeValueByBtn(60)} >60%</button>
					<button className ="btn btn-primary" onClick={() => this.changeValueByBtn(80)} >80%</button>
					<button className ="btn btn-primary" onClick={() => this.changeValueByBtn(100)} >100%</button>
				</div>				
			</div>
		)
	}

	changeValueByInput() {
		const node = this.refs.valueInput
		const value = node.value.trim()
		this.props.onChangeValue(value)
	}

	changeValueByBtn(value) {
		this.props.onChangeValue(value)
	}



}

