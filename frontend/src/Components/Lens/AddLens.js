import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLens } from '../../Store/Actions/lensActions'

export class AddLens extends Component {
  state = {
    title: '',
		titleImg:  '',
		stretch: 0,
		focusType:'',
		tkLens: 0,
		minFocus: 0,
		avgPrice: 0,
		epn: '',
		weight: 0,
		length: 0,
		frontGlass: 0 ,
		rearGlass: 0,
		filterThreads: 0,
		rearThreads: 0,
		manufacturer: '',
		alias: [],
		review: '',
		galleryLink: '',
		galleryImg: '',
		pros: [],
		cons: [],
		obs: [],
		shotWith: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    // this.setState({
    //   title: '',
    //   titleImg:  '',
    //   stretch: 0,
    //   focusType:'',
    //   tkLens: 0,
    //   minFocus: 0,
    //   avgPrice: 0,
    //   epn: '',
    //   weight: 0,
    //   length: 0,
    //   frontGlass: 0 ,
    //   rearGlass: 0,
    //   filterThreads: 0,
    //   rearThreads: 0,
    //   manufacturer: '',
    //   alias: [],
    //   review: '',
    //   galleryLink: '',
    //   galleryImg: '',
    //   pros: [],
    //   cons: [],
    //   obs: [],
    //   shotWith: []
    // })
    this.props.addLens(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h2 className="grey-text">
            Add Lens to Lens-yclopedia
          </h2>
          <div className="input-field">
            <label htmlFor="title">Name:</label>
            <input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
          </div>
          <div className="input-field">
            <label htmlFor="titleImg">Image to upload: UPLOAD FIELD</label>
            <input type="text" id="titleImg" onChange={this.handleChange} value={this.state.titleImg}/>
          </div>
          <div className="input-field">
            <label htmlFor="stretch">Stretch: NUMBER FIELD</label>
            <input type="text" id="stretch" onChange={this.handleChange} value={this.state.stretch}/>
          </div>
          <div className="input-field">
            <label htmlFor="focusType">Focus Type:</label>
            <input type="text" id="focusType" onChange={this.handleChange} value={this.state.focusType}/>
          </div>
          <div className="input-field">
            <label htmlFor="tkLens">Taking Lens: NUMBER FIELD</label>
            <input type="text" id="tkLens" onChange={this.handleChange} 
            value={this.state.tkLens}/>
          </div>
          <div className="input-field">
            <label htmlFor="minFocus">Minimun Focus: NUMBER FIELD</label>
            <input type="text" id="minFocus" onChange={this.handleChange} 
            value={this.state.minFocus}/>
          </div>
          <div className="input-field">
            <label htmlFor="avgPrice">Average Price NUMBER FIELD:</label>
            <input type="text" id="avgPrice" onChange={this.handleChange} 
            value={this.state.avgPrice}/>
          </div>
          <div className="input-field">
            <label htmlFor="epn">EPN LINK FIELD:</label>
            <input type="text" id="epn" onChange={this.handleChange} 
            value={this.state.epn}/>
          </div>
          <div className="input-field">
            <label htmlFor="weight">Weight NUMBER FIELD:</label>
            <input type="text" id="weight" onChange={this.handleChange} 
            value={this.state.weight}/>
          </div>
          <div className="input-field">
            <label htmlFor="length">Length NUMBER FIELD:</label>
            <input type="text" id="length" onChange={this.handleChange} 
            value={this.state.length}/>
          </div>
          <div className="input-field">
            <label htmlFor="frontGlass">Front Glass: NUMBER FIELD</label>
            <input type="text" id="frontGlass" onChange={this.handleChange} 
            value={this.state.frontGlass}/>
          </div>
          <div className="input-field">
            <label htmlFor="rearGlass">Rear Glass: NUMBER FIELD</label>
            <input type="text" id="rearGlass" onChange={this.handleChange} 
            value={this.state.rearGlass}/>
          </div>
          <div className="input-field">
            <label htmlFor="filterThreads">Filter Threads: NUMBER FIELD</label>
            <input type="text" id="filterThreads" onChange={this.handleChange} 
            value={this.state.filterThreads}/>
          </div>
          <div className="input-field">
            <label htmlFor="rearThreads">Rear Threads: NUMBER FIELD</label>
            <input type="text" id="rearThreads" onChange={this.handleChange} 
            value={this.state.rearThreads}/>
          </div>
          <div className="input-field">
            <label htmlFor="manufacturer">Manufacturer:</label>
            <input type="text" id="manufacturer" onChange={this.handleChange} 
            value={this.state.manufacturer}/>
          </div>
          <div className="input-field">
            <label htmlFor="alias">Alias ARRAY:</label>
            <input type="text" id="alias" onChange={this.handleChange} 
            value={this.state.alias}/>
          </div>
          <div className="input-field">
            <label htmlFor="review">Review: ARRAY</label>
            <input type="text" id="review" onChange={this.handleChange} 
            value={this.state.review}/>
          </div>
          <div className="input-field">
            <label htmlFor="galleryLink">Gallery Link: LINK</label>
            <input type="text" id="galleryLink" onChange={this.handleChange} 
            value={this.state.galleryLink}/>
          </div>
          <div className="input-field">
            <label htmlFor="galleryImg">Gallery Image: LINK</label>
            <input type="text" id="galleryImg" onChange={this.handleChange} 
            value={this.state.galleryImg}/>
          </div>
          <div className="input-field">
            <label htmlFor="pros">Pros: LIST- ARRAY</label>
            <input type="text" id="pros" onChange={this.handleChange} 
            value={this.state.pros}/>
          </div>
          <div className="input-field">
            <label htmlFor="cons">cons: LIST- ARRAY</label>
            <input type="text" id="cons" onChange={this.handleChange} 
            value={this.state.cons}/>
          </div>
          <div className="input-field">
            <label htmlFor="obs">Observations: TEXT-BOX</label>
            <input type="text" id="obs" onChange={this.handleChange} 
            value={this.state.obs}/>
          </div>
          <div className="input-field">
            <label htmlFor="shotWith">Shot With:</label>
            <input type="text" id="shotWith" onChange={this.handleChange} 
            value={this.state.shotWith}/>
          </div>
          <div className="input-field">
            <button className="btn green lighten-2">Add Lens</button>
          </div>
        </form>
      </div>
    )
  }
}

//Function dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    addLens: (lens) => dispatch(addLens(lens)) 
  }

}

export default connect(null, mapDispatchToProps)(AddLens)
