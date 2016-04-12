import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import processBarState from './ReduxReducers/reducers'
import App from './ReduxContainer/App'


let store = createStore(processBarState)

let ele = document.getElementById('example')
render(
	<Provider store = { store }>
		<App />
	</Provider>,
	ele
)