import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    margin: 10,
    padding: 10,
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
      margin: 10,
      padding: 10,
      minWidth: '200px',
    },
  },
})

const Graph = ({ total, remaining, label, classes }) => {
  return (
    <Paper className={classes.root}>
      <h3>{label}</h3>
      <p>{total}</p>
      <p>{remaining}</p>
    </Paper>
  )
}

Graph.propTypes = {
  total: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  label: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default (withStyles(styles)(Graph))