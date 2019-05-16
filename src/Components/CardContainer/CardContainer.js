import React from 'react';
import Card from '../Card/Card'

const CardContainer = (props) => {
  const displayCards = props.cards.map((eachCard) => {
    return <Card {...eachCard}/>
  })
  
  return (
    <div>
      {displayCards}
    </div>
  )
}

export default CardContainer
