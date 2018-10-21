import React, { Component } from 'react'
import LensList from '../Lens/LensList'

class Dashboard extends Component {
  render(){

    return(
      <div className="dashboard container">
        <div className="row ">
          {/* List of lenses */}
          <div className="col s12 m8">
            <LensList/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard