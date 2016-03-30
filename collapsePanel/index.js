import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import panelState from './ReduxReducers/reducers'
import App from './ReduxContainer/panelApp'

let store = createStore(panelState)

let ele = document.getElementById('example')
render(
	<Provider store = {store}>
		<App />
	</Provider>,
	ele
)