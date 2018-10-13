import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import CampaignCard from '../../card/CampaignCard'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    justifyContent: 'center'
  },
})

function CampaignStatusTabContainer(props) {

  function renderCards() {
    const { data } = props
    return data.map((campaign, i) => {
      return (<CampaignCard key={i} campaign={campaign.campaign} />)
    })
  }
  const { classes } = props
  return (
    <div>
      <Paper className={classes.root} elevation={1} >
        {renderCards()}
      </Paper>
    </div>
  )
}

CampaignStatusTabContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.any
}

export default withStyles(styles)(CampaignStatusTabContainer)
