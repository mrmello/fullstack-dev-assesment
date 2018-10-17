import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    margin: 10,
    background: '#f1f1f1',
    padding: 10,
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
      margin: 10,
      padding: 10,
      minWidth: '100px',
      background: '#f1f1f1',
      textAlign: 'center',
    },
  },
  description: {
    color: '#2196F3',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 11,
  }
})

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