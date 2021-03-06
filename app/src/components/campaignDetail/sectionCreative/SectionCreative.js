import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import styles from './SectionCreativeStyles'

/**
 * The Section to present the creative part of the campaing. Includes a image, title, description and link
 */
const SectionCreative = ({ creatives, classes }) => {
  return (
    <Paper className={classes.root} elevation={0} square>
      <Typography className={classes.headline}>CREATIVE</Typography>
      <Divider light />
      <a href={creatives.url} className={classes.link} target='blank'>
        <img alt={creatives.description} style={{paddingTop: 10}} src={require(`../../../assets/images/${creatives.image}`)} width="100%"/>
      </a>
      <Typography className={classes.title}>
        {creatives.header || (`${creatives.header_1}, ${creatives.header_2}`)}
      </Typography>
      <Typography className={classes.description} color="textSecondary">{creatives.description}</Typography>
    </Paper>
  )
}

SectionCreative.propTypes = {
  /**
   * The styling classes
   */
  classes: PropTypes.object.isRequired,
  /**
   * The creative data to be shown
   */
  creatives: PropTypes.object.isRequired
}

export default (withStyles(styles)(SectionCreative))