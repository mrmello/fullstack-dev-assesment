import React from 'react'
import PropTypes from 'prop-types'

const Graph = ({ total, remaining, label}) => {
  return (
    <div>
      <h3>{label}</h3>
      <p>{total}</p>
      <p>{remaining}</p>
    </div>
  )
}

Graph.propTypes = {
  total: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  label: PropTypes.string
}

export default Graph