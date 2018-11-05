import React, { Component } from 'react'
import LensList from '../Lens/LensList'
import { connect } from 'react-redux'


const mapStateToProp = (state) => {
  return {
     lenses: state.lens.lens
  }
}

class Dashboard extends Component {
  render(){
    // console.log(this.props)
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

export default connect(mapStateToProp)(Dashboard)