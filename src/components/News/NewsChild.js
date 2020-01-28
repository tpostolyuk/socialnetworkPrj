import React from 'react'

export default function NewsChild(props) {
  return (
    <div>
      <button onClick={props.greet}>Click me!</button>
    </div>
  )
}
