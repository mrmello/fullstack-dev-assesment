import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import styles from './SectionAudienceStyles'

/**
 * Section that presents information on the audience. It includes languages, genders, age, location,
 * key words and interests
 */
const SectionAudience = ({ audience, classes }) => {
  return (
    <Paper className={classes.root} elevation={0} square>
      <Typography className={classes.headline}>AUDIENCE</Typography>
      <Divider light />
      {audience.languages && <Typography color="textSecondary" className={classes.description}>LANGUAGES: {Object.keys(audience.languages).map(lang => `${audience.languages[lang]}, `)}</Typography>}
      {audience.genders && <Typography color="textSecondary" className={classes.description}>GENDERS: {`${audience.genders[0]} & ${audience.genders[1]}`}</Typography>}
      {audience.age_range && <Typography color="textSecondary" className={classes.description}>AGE: {`${audience.age_range[0]} to ${audience.age_range[1]}`}</Typography>}
      {audience.locations && <Typography color="textSecondary" className={classes.description}>LOCATIONS: {Object.keys(audience.locations).map(loc => `${audience.locations[loc]}, `)}</Typography>}
      {audience.KeyWords && <Typography color="textSecondary" className={classes.description}>KEY WORDS: {Object.keys(audience.KeyWords).map(k => `${audience.KeyWords[k]}, `)}</Typography>}
      {audience.interests && <Typography color="textSecondary" className={classes.description}>INTERESTS: {Object.keys(audience.interests).map(int => `${audience.interests[int]}, `)}</Typography>}
    </Paper>
  )
}

SectionAudience.propTypes = {
  /**
   * The styling classes
   */
  classes: PropTypes.object.isRequired,
  /**
   * The audience to be presented
   */
  audience: PropTypes.object.isRequired
}

export default (withStyles(styles)(SectionAudience))