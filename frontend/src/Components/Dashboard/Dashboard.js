import React, { Component } from 'react'
import LensList from '../Lens/LensList'
// Connect the component to the Redux state
import { connect } from 'react-redux'
//To compose firestore connect and redux connect
import { compose } from 'redux'

import { fireStoreConnect, firestoreConnect } from 'react-redux-firebase'

const mapStateToProp = (state) => {
  // console.log(state)
  
  return {
     lenses: state.database.ordered.lenses
  }
}

class Dashboard extends Component {
  render(){
    console.log(this.props)
    const { lenses } = this.props
    return(
      <div className="dashboard container">
        <div className="row ">
          {/* List of lenses */}
          <div className="col s12 m8">
            <LensList lenses={lenses}/>
          </div>
        </div>
      </div>
    )
  }
}

//Higher order components together using the compose function. 
export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    { collection: 'lenses' }
  ])
)(Dashboard)