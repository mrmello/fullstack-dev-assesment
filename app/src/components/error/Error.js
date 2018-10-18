import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import styles from './ErrorStyles'

class Error extends Component {
  render(){
    const { errorOccured, classes, errorMessage } = this.props
    if(!errorOccured) return null
    return (
      <Paper className={classes.root} elevation={0} square>
        <Typography className={classes.headline} color="textSecondary">Ooops</Typography>
        <Typography className={classes.description} color="textSecondary">{errorMessage}</Typography>
      </Paper>
    )
  }
}

Error.propTypes = {
  errorOccured: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
}

function mapStateToProps(state) {
  return {
    errorOccured: state.campaigns.errorOccured,
    errorMessage: state.campaigns.errorMessage,
  }
}
export default connect(mapStateToProps, null)(withStyles(styles)(Error))