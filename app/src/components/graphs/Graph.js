import React from 'react'

const Graph = ({ total = 10, remaining = 7, label = 'Test'}) => {
  return (
    <div>
      <h3>{label}</h3>
      <p>{total}</p>
      <p>{remaining}</p>
    </div>
  )
}

export default Graph