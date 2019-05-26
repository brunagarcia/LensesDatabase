import React from 'react'

// Connect the component to the Redux state
import { connect } from 'react-redux'
//To compose firestore connect and redux connect
import { compose } from 'redux'

import { fireStoreConnect, firestoreConnect } from 'react-redux-firebase'

const mapStateToProps = (state, props) => {
  console.log(props.match.params.id)
  return {
     lenses: state.database.ordered.lenses
  }
}
//testing the commit

// const mapStateToProps = (state, props) => {
//   const obj = 
//   console.log(state)

//   // if (ownProps.name === "alpha") {
//   //   return {
//   //     data: state.alpha.data
//   //   }
//   // } else if (ownProps.name === "beta") {
//   //   return {
//   //     data: state.beta.data    
//   //   }
//   // } else {
//   //   return null;
//   // }
// };

const LensDetail = (props) => {
  const { id } = props.match.params;
  const lens = (props.lenses || []).find(lens => lens.id === id);
  console.log('lens', lens);
  console.log(id)
  if (!lens) {
    return <div>No lens found</div>;
  }

  const { title } = lens;
  return (
    <div className="container section lensDetails">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            
          </span>
          <h5>{ title }</h5>
          <p>Lens detail 2</p>
          <p>Lens detail 2</p>
          <p>Lens detail 2</p>
          <div className="card-action row grey lighten-4 grey-text">
            <div className="col m6">
              <p className='black-text'>Pros</p>
              <ul>
                <li>Few </li>
                <li>Pros</li>
              </ul>
            </div>
            <div className="col m6">
              <p className='black-text'>Cons</p>
              <ul>
                <li>Few </li>
                <li>Cons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'lenses' }
  ])
)(LensDetail)