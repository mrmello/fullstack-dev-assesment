import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import styles from './InsightStyles'

/**
 * The single insigth component. It presents a label and a value for the respective insight
 */
const Insight = ({ value, label, classes }) => {
  return (
    <Paper className={classes.root} elevation={0} square>
      <Typography className={classes.description} gutterBottom>{label}</Typography>
      <Typography className={classes.value} >{value}</Typography>
    </Paper>
  )
}

Insight.propTypes = {
  /**
   * The insight value
   */
  value: PropTypes.number.isRequired,
  /**
   * The insight label
   */
  label: PropTypes.string.isRequired,
  /**
   * The styling classes
   */
  classes: PropTypes.object.isRequired
}

export default (withStyles(styles)(Insight))