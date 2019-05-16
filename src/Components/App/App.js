import React, { Component } from 'react';
import Form from '../Form/Form'
import { createOption } from '../Utils/createOptions'
import './App.css';

class App extends Component {
  
  addReservation = async (body) => {
    const url = "http://localhost:3001/api/v1/reservations";
    const options = createOption("POST",body )
    console.log(options)
    try{
      const response = await fetch(url,options)
      const result = await response.json()
      console.log(result)
    }catch(error){
      console.log("this is error")
    }

    
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
