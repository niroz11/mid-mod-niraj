import React, { Component } from 'react';
import Form from '../Form/Form'
import CardContainer from '../CardContainer/CardContainer'
import { createOption } from '../Utils/createOptions'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      reservations: [],
      error: ""
    }
  }

  componentDidMount = async () => {
    const url = "http://localhost:3001/api/v1/reservations"
    try{
      const response = await fetch(url)
      const result = await response.json()
      this.setState({
        reservations: result
      })
    }catch(error){
      this.setState({
        error: "can not fetch your data"
      })
    }
  }
  
  addReservation = async (body) => {
    const url = "http://localhost:3001/api/v1/reservations";
    const options = createOption("POST",body )
    console.log(options)
    try{
      const response = await fetch(url,options)
      const result = await response.json()
      console.log(result)
    }catch(error){
      this.setState({
        error: "Can not add your reservation"
      })
    }

    
  }
  render() {
    const { reservations } = this.state
    console.log(reservations, "props")
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
          {this.state.error && this.state.error}
        </div>
        <div className='resy-container'>
          <CardContainer cards={reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
