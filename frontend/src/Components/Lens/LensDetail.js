import React from 'react'

const LensDetail = (props) => {
  const { id } = props.match.params
  console.log(id)
  return (
    <div className="container section lensDetails">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            This is the lens {id }!
          </span>
          <h5>Lens Info 1 </h5>
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

export default LensDetail