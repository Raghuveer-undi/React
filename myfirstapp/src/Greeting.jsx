import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h4>Hello ,{props.fn}!! You age is {props.a}</h4>
      <h4>My Favorite Color is {props.favcolor}</h4>
    </div>
  )
}
