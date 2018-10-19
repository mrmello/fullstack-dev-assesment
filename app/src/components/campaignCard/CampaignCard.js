import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Graph from '../graph/Graph'
import Store from '../../store'
import { selectCampaign } from '../../actions'
import Ionicon from 'react-ionicons'
import styles from './CampaignCardStyles'

/**
 * A complex type card presenting resumed data about a campaign. Includes the name, icons of the platforms
 * the campaign is on, the campaign's goal and a graphic representation of the campaign's budget
 */
function CampaignCard(props) {
  function renderButtons(platforms){
    return Object.keys(platforms).map((p, i) => {
      return (
        <Ionicon key={i} icon={`logo-${p}`} color="#2196F3"/>
      )
    })
  }

  function renderGraph(campaign) {
    let total_budget = campaign.total_budget
    let remaining_budget = 0
    Object.keys(campaign.platforms).forEach(p => {
      remaining_budget += campaign.platforms[p].remaining_budget
    })
    return (
      <Graph total={total_budget} remaining={remaining_budget} label="Budget"/>
    )
  }

  function handleClick(campaign){
    Store.dispatch(selectCampaign(campaign))
  }

  const { classes, campaign } = props
  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {campaign.name}
        </Typography>
        <div className={classes.icons}>
          {renderButtons(campaign.platforms)}
        </div>
        <Typography variant="h5" component="h2" className={classes.goal}>
          {campaign.goal}
        </Typography>
        {renderGraph(campaign)}
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="medium" component={Link} to={`/${campaign.id}`} onClick={handleClick(campaign)}>Details</Button>
      </CardActions>
    </Card>
  )
}

CampaignCard.propTypes = {
  /**
   * The styling classes
   */
  classes: PropTypes.object.isRequired,
  /**
   * The campaign
   */
  campaign: PropTypes.object
}

export default withStyles(styles)(CampaignCard)
