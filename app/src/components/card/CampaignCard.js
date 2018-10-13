import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

function CampaignCard(props) {
  function renderButtons(platforms){
    return Object.keys(platforms).map((p, i) => {
      return (
        <Button key={i} size="small" data={platforms[p]} component={Link} to={`/${campaign.id}/${p}`} >{p}</Button>
      )
    })
  }
  const { classes, campaign } = props
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {campaign.goal}
        </Typography>
        <Typography variant="h5" component="h2">
          {campaign.name}
        </Typography>
      </CardContent>
      <CardActions>
        {renderButtons(campaign.platforms)}
        <Button size="small" component={Link} to={`/${campaign.id}`}>Details</Button>
      </CardActions>
    </Card>
  )
}

CampaignCard.propTypes = {
  classes: PropTypes.object.isRequired,
  campaign: PropTypes.object
}

export default withStyles(styles)(CampaignCard)
