import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  root: {
    height: '93%',
    padding: 10,
  },
  headline: {

  },
  description: {

  },
})

const SectionAudience = ({ audience, classes }) => {
  return (
    <Paper className={classes.root}>
      {audience.languages && <Typography className={classes.headline}>Languages: {Object.keys(audience.languages).map(lang => `"${audience.languages[lang]}", `)}</Typography>}
      {audience.genders && <Typography className={classes.description}>Genders: {Object.keys(audience.genders).map(g => `"${audience.genders[g]}" `)}</Typography>}
      {audience.age_range && <Typography className={classes.description}>Age: {`${audience.age_range[0]} to ${audience.age_range[1]}`}</Typography>}
      {audience.locations && <Typography className={classes.headline}>Locations: {Object.keys(audience.locations).map(loc => `"${audience.locations[loc]}", `)}</Typography>}
      {audience.KeyWords && <Typography className={classes.headline}>KeyWords: {Object.keys(audience.KeyWords).map(k => `"${audience.KeyWords[k]}", `)}</Typography>}
      {audience.interests && <Typography className={classes.headline}>Interests: {Object.keys(audience.interests).map(int => `"${audience.interests[int]}", `)}</Typography>}
    </Paper>
  )
}

SectionAudience.propTypes = {
  classes: PropTypes.object.isRequired,
  audience: PropTypes.object.isRequired
}

export default (withStyles(styles)(SectionAudience))