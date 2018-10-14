import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    padding: 10,
  },
  headline: {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: 14,
    top: 0,
    [theme.breakpoints.up('md')]: {
      color: 'white',
      fontSize: 18,
      textShadow: '-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray',
      top: 40,
    },
    paddingLeft: 10,
    position: 'relative'
  },
  description: {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: 11,
    top: 0,
    [theme.breakpoints.up('md')]: {
      color: 'white',
      fontSize: 13,
      textShadow: '-1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray',
      top: -45,
    },
    paddingLeft: 10,
    position: 'relative',
  },
  link: {
    textDecoration: 'none',
  }
})

const SectionCreative = ({ creatives, classes }) => {
  return (
    <a href={creatives.url} className={classes.link} target='blank'>
      <Paper className={classes.root}>
        <Typography className={classes.headline}>
          {creatives.header || (`${creatives.header_1}, ${creatives.header_2}`)}
        </Typography>
        <img alt={creatives.description} src={require(`../../assets/images/${creatives.image}`)} width="100%"/>
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