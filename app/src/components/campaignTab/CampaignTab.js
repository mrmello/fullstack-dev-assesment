import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchCampaigns } from '../../actions'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import styles from './CampaignTabStyles'
import CampaignStatusTabContainer from './tabContainer/TabContainer'

class CampaignStatusTab extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
  }

  componentDidMount() {
    this.props.fetchCampaigns()
  }

  renderTabLabels() {
    return this.props.campaigns.map((campaign, i) => {
      return (
        <Tab key={i} label={campaign.keys().next().value} />
      )
    })
  }

  renderTabContainers() {
    return this.props.campaigns.map((campaign, i) => {
      const { value } = this.state
      return value === i && <CampaignStatusTabContainer style={styles.campaignStatusTabContainer} key={i} data={campaign.get(String(campaign.keys().next().value))} />
    })
  }

  render() {
    const handleChange = (event, value) => {
      this.setState({ value })
    }

    if(!this.props.campaigns) return null
    const { classes } = this.props
    return (
      <Paper className={classes.root} square>
        <Tabs
          value={this.state.value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {this.renderTabLabels()}
        </Tabs>
        {this.renderTabContainers()}
      </Paper>
    )
  }
}

CampaignStatusTab.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchCampaigns: PropTypes.func,
  campaigns: PropTypes.array
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCampaigns: fetchCampaigns}, dispatch)
}

function mapStateToProps(state) {
  return {
    campaigns: state.campaigns.campaigns
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignStatusTab))
