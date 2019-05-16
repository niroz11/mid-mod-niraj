import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""

    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("i clicked")
    const body = this.state
    this.props.addReservation(body)

  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange}/>
          <input type="text" name="date" onChange={this.handleChange}/>
          <input type="text" name="time" onChange={this.handleChange}/>
          <input type="text" name="number" onChange={this.handleChange}/>
          <button/>
          
        </form>
      </div>
    )
  }
}

export default Form;