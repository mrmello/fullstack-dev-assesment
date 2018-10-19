import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import CampaignCard from '../../campaignCard/CampaignCard'
import styles from './TabContainerStyles'

/**
 * A container tha holds the campaing cards
 */
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
      <Paper className={classes.root} elevation={0} square>
        {renderCards()}
      </Paper>
    </div>
  )
}

CampaignStatusTabContainer.propTypes = {
  /**
   * The styling classes
   */
  classes: PropTypes.object.isRequired,
  /**
   * The object where the campaigns are stored
   */
  data: PropTypes.any
}

export default withStyles(styles)(CampaignStatusTabContainer)
