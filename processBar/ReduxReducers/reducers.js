import { combineReducers } from 'redux'
import { CHANGE_VALUE, CHANGE_STRIPED, CHANGE_TEXT, CHANGE_ACTIVE, CHANGE_COLOR, ProcessColors } from '../ReduxActions/actions'
const { progressBarSuccess } = ProcessColors


function valueState(state = 50, action){
	switch (action.type){
		case CHANGE_VALUE:
			return action.value
		default: 
			return state
	}
}

function stripedState(state = true, action){
	switch (action.type){
		case CHANGE_STRIPED:
			return action.isStriped
		default:
			return state
	}
}

function textState(state = true, action){
	switch (action.type){
		case CHANGE_TEXT:
			return action.isText
		default:
			return state
	}
}

function activeState(state = true, action){
	switch (action.type){
		case CHANGE_ACTIVE:
			return action.isActive
		default:
			return state
	}
}

function colorState(state = progressBarSuccess, action){
	switch (action.type){
		case CHANGE_COLOR:
			return action.colorType
		default:
			return state
	}
}

const processBarState = combineReducers({
	valueState,
	stripedState,
	textState,
	activeState,
	colorState
})

export default processBarState

