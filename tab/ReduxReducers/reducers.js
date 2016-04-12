import { combineReducers } from 'redux'
import { CLICK_TAB } from '../ReduxActions/actions'

const showTabIndex = 1;

export function tabsState(state = showTabIndex, action){
	switch (action.type){
		case CLICK_TAB:
			return action.tabIndex
		default:
			return state
	}
}

const tabState = combineReducers({
	tabsState
})

export default tabState