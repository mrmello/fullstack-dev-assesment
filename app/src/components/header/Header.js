import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import styles from './HeaderStyles'
import { Link } from 'react-router-dom'

/**
 * The application header. Presents a link to the homeScreen as well as the app title
 */
function Header(props) {
  const { classes, title } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to={'/'} className={classes.menuButton} color="inherit" aria-label="Open drawer">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  /**
   * Styling classes.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Title to be presented
   */
  title: PropTypes.string.isRequired,
}

export default withStyles(styles)(Header)
