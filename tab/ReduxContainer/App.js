import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { clickTab } from '../ReduxActions/actions'
import TabHeader from '../ReduxComponent/tabHeader'
import TabContent from '../ReduxComponent/tabContent'

class App extends Component {
  render() {
    const { dispatch, tabIndex } = this.props
    return (
      <div>
        <TabHeader onClickTab={index => dispatch(clickTab(index))} tabIndex={tabIndex} />
        <TabContent tabIndex={tabIndex} />
      </div>
    )
  }
}



function stateCallBack(state){
  console.log(state.tabsState)
	return {
    tabIndex: state.tabsState
	}
}

export default connect(stateCallBack)(App)



