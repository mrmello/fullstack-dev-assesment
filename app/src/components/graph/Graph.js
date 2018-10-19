import React from 'react'
import PropTypes from 'prop-types'
import Circle from 'react-circle'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import styles from './GraphStyles'

/**
 * Graph component renders a svg graph circle for data visualization
 */
const Graph = ({ total, remaining, label, classes }) => {
  let progress = (100 - ((remaining * 100) / total)).toFixed(0)
  return (
    <div className={classes.graph}>
      <Typography color="textSecondary" >{label}</Typography>
      <Circle
        progress={progress}
        textColor="#2196F3"
        progressColor="#2196F3"
        bgColor="#1bd3b4"
        size="200"
        roundedStroke
      />
      <Typography className={classes.remaining}>Remaining</Typography>
      <Typography className={classes.used}>Used</Typography>
    </div>
  )
}

Graph.propTypes = {
  /**
   * The total amount
   */
  total: PropTypes.number.isRequired,
  /**
   * The remaining amount
   */
  remaining: PropTypes.number.isRequired,
  /**
   * The styling classes
   */
  classes: PropTypes.object.isRequired,
  /**
   * A label fot the graph
   */
  label: PropTypes.string
}

export default (withStyles(styles)(Graph))