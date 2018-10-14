import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    padding: 10,
  },
  headline: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 18,
    paddingLeft: 10,
    textShadow: '-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray',
    top: 40,
    position: 'relative'
  },
  description: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 13,
    paddingLeft: 10,
    textShadow: '-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray',
    top: -45,
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
    width:"60%"
  }
}

const SectionCreative = ({ creatives, classes }) => {
  return (
    <a href={creatives.url} className={classes.link} target='blank'>
      <Paper className={classes.root}>
        <Typography className={classes.headline}>
          {creatives.header || (`${creatives.header_1}, ${creatives.header_2}`)}
        </Typography>
        <img src={require(`../../assets/images/${creatives.image}`)} width="100%"/>
        <Typography className={classes.description}>{creatives.description}</Typography>
      </Paper>
    </a>
  )
}

SectionCreative.propTypes = {
  classes: PropTypes.object.isRequired,
  creatives: PropTypes.object.isRequired
}

export default (withStyles(styles)(SectionCreative))