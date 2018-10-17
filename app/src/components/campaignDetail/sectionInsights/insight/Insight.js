import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import styles from './InsightStyles'

const Insight = ({ value, label = "Label", classes }) => {
  return (
    <Paper className={classes.root} elevation={0} square>
      <Typography className={classes.description} gutterBottom>{label}</Typography>
      <Typography className={classes.value} >{value}</Typography>
    </Paper>
  )
}

Insight.propTypes = {
  value: PropTypes.number.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default (withStyles(styles)(Insight))