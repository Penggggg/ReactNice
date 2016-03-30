import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { togglePanel, closePanel } from '../ReduxActions/actions'
import PanelHead from '../ReduxComponent/PanelHead'
import PanelBody from '../ReduxComponent/PanelBody'

class App extends Component{
	render() {
		const { dispatch, isToggle, isClose } = this.props
		//样式一
		const displayTag = isClose ? 'none' : 'block'
		return (
			<div>
				<div className="panel panel-default" style={{ display:displayTag }} >
					<PanelHead isToggle={isToggle} 
						onToggleChange={ value =>dispatch(togglePanel(value)) } 
						onCloseChange={ value => dispatch(closePanel(value)) } />
					<PanelBody isToggle={isToggle} />
				</div>
			</div>
		)
	}

}

function stateCallBack(state){
	
	return{
		isToggle: state.toggleState,
		isClose: state.closeState
	}
}

export default connect(stateCallBack)(App)