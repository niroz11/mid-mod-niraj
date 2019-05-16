import React from 'react'

const Card = (props) => {
  console.log(props, "card props")
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.number}</p>
      <button>cancel</button>
    </div>
  )
}

export default Card;