import React, { Component } from 'react'
import LensList from '../Lens/LensList'
// Connect the component to the Redux state
import { connect } from 'react-redux'
//To compose firestore connect and redux connect
import { compose } from 'redux'

import { firestoreConnect } from 'react-redux-firebase'

const mapStateToProp = (state) => {
  return {
     lenses: state.database.ordered.lenses
  }
}

const Dashboard = ({ lenses }) => (
  <div>
    <LensList lenses={lenses}/>
  </div>
)

//Higher order components together using the compose function. 
export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'lenses' }
  ])
)(Dashboard)