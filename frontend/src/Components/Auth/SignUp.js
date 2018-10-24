import React, { Component } from 'react'

export class SignUp extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      email:'',
      password:'', 
      firstName: '',
      lastName: ''
    })
    
  }

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h2 className="grey-text">
          Sign Up
          </h2>
          <div className="input-field">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" onChange={this.handleChange} value={this.state.firstName}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" onChange={this.handleChange} value={this.state.lastName}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={this.handleChange} value={this.state.email}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/>
          </div>
          <div className="input-field">
            <button className="btn green lighten-2">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
