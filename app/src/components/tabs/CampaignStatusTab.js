import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import styles from './CampaignStatusTabStyles'
import CampaignStatusTabContainer from './CampaignStatusTabContainer';

class CampaignStatusTab extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state
    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Delivering" />
          <Tab label="Scheduled" />
          <Tab label="Ended" />
        </Tabs>
        {value === 0 && <CampaignStatusTabContainer data="Item One"></CampaignStatusTabContainer>}
        {value === 1 && <CampaignStatusTabContainer data="2"></CampaignStatusTabContainer>}
        {value === 2 && <CampaignStatusTabContainer data="three"></CampaignStatusTabContainer>}
      </Paper>
    )
  }
}

CampaignStatusTab.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CampaignStatusTab)
