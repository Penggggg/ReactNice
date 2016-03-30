import { combineReducers } from 'redux'
import { TOGGLE_PANEL, CLOSE_PANEL } from '../ReduxActions/actions'

function toggleState(state = true, action){
	switch(action.type) {
		case TOGGLE_PANEL:
			return action.isOpened
		default: 
			return state
	}
}

function closeState(state = false, action){
	switch(action.type){
		case CLOSE_PANEL:
			return action.isClosed
		default:
			return state
	}
}

const panelState = combineReducers({
	toggleState,
	closeState
}) 

export default panelState
