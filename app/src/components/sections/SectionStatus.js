import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Graph from '../graphs/Graph'

const styles = () => ({
  root: {
    height: '95%',
    padding: 10,
  },
  headline: {
  },
  description: {
  },
})

const SectionStatus = ({ campaign, classes }) => {
  return (
    <Paper className={classes.root}>
      <Typography className={classes.headline}>{campaign.status}</Typography>
      <Graph total={campaign.total_budget} remaining={campaign.remaining_budget} label="Budget" />
      <Typography className={classes.description}>{`${new Date(campaign.start_date).toLocaleDateString()} to ${new Date(campaign.end_date).toLocaleDateString()}`}</Typography>
    </Paper>
  )
}

SectionStatus.propTypes = {
  classes: PropTypes.object.isRequired,
  campaign: PropTypes.object.isRequired
}

export default (withStyles(styles)(SectionStatus))