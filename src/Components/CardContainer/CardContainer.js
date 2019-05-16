import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css'

const CardContainer = (props) => {
  const displayCards = props.cards.map((eachCard) => {
    return <Card key={eachCard.id} {...eachCard} deleteReservation={props.deleteReservation}/>
  })
  
  return (
    <div className="card-container">
      {displayCards}
    </div>
  )
}

export default CardContainer
