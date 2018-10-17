import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import Graph from '../../graph/Graph'
import styles from './SectionStatusStyles'

const SectionStatus = ({ campaign, classes }) => {
  return (
    <Paper className={classes.root} elevation={0} square>
      <Typography className={classes.headline}>STATUS</Typography>
      <Divider light />
      <Typography className={classes.date} color="textSecondary">{`${new Date(campaign.start_date).toLocaleDateString()} - ${new Date(campaign.end_date).toLocaleDateString()}`}</Typography>
      <Typography className={classes.status} color="textSecondary">{campaign.status}</Typography>
      <Graph total={campaign.total_budget} remaining={campaign.remaining_budget} label="Budget" />
    </Paper>
  )
}

SectionStatus.propTypes = {
  classes: PropTypes.object.isRequired,
  campaign: PropTypes.object.isRequired
}

export default (withStyles(styles)(SectionStatus))