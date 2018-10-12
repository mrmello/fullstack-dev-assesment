import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

function CampaignStatusTabContainer(props) {
  const { classes, data } = props

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography component="p">
          {data}
        </Typography>
      </Paper>
    </div>
  )
}

CampaignStatusTabContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.any
}

export default withStyles(styles)(CampaignStatusTabContainer)
