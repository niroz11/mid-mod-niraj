import React, { Component } from 'react';
import './Form.css'

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
        <form className="user-form" onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
          <input type="text" name="date" placeholder="date" onChange={this.handleChange}/>
          <input type="text" name="time" placeholder="time" onChange={this.handleChange}/>
          <input type="text" name="number" placeholder="number" onChange={this.handleChange}/>
          <button>Make Reservation</button>
          
        </form>
      </div>
    )
  }
}

export default Form;