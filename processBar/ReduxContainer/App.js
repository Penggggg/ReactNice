import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeValue, changeStriped, changeText, changeActive, changColor, ProcessColors } from '../ReduxActions/actions'
import ProcessBar from '../ReduxComponent/ProcessBar'
import ValuePanel from '../ReduxComponent/ValuePanel'
import ProcessStyle from '../ReduxComponent/ProcessStyle'
import ProcessColor from '../ReduxComponent/ProcessColor'


class App extends Component {
  render() {
    const { dispatch, processValue, isStriped, isText, isActive, colorType } = this.props
    return (
      <div>
		<ProcessBar processValue={processValue} isStriped={isStriped} isActive={isActive} isText={isText} colorType={colorType} />
		<ValuePanel processValue={processValue} onChangeValue={value =>
			dispatch(changeValue(value))
		} />
		<ProcessStyle isStriped={isStriped} isText={isText} isActive={isActive} 
		 	onChangeStriped={ isStriped => dispatch(changeStriped(isStriped)) } 
		 	onChangeActive={ isActive => dispatch(changeActive(isActive)) }
		 	onChangeText={ isText => dispatch(changeText(isText)) }  />
		<ProcessColor onChangeColor={ colorType => dispatch(changColor(colorType)) } />
      </div>
    )
  }
}

App.PropTypes = {
	processValue: PropTypes.number.isRequired,
	isStriped: PropTypes.bool.isRequired,
	isText: PropTypes.bool.isRequired,
	isActive: PropTypes.bool.isRequired,
	colorType: PropTypes.oneOf([
		'progress-bar-success',
		'progress-bar-info',
		'progress-bar-warning',
		'progress-bar-danger'
	]).isRequired
}

function stateCallBack(state){
	return {
		processValue: state.valueState,
		isStriped: state.stripedState,
		isText: state.textState,
		isActive: state.activeState,
		colorType: state.colorState
	}
}

export default connect(stateCallBack)(App)



