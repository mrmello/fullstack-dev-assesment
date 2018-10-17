import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchCampaignById } from '../../actions'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SectionCreative from './sectionCreative/SectionCreative'
import SectionStatus from './sectionStatus/SectionStatus'
import SectionAudience from './sectionAudience/SectionAudience'
import SectionInsights from './sectionInsights/SectionInsights'
import styles from './CampaignDetailStyles'

class CampaignDetail extends Component {
  constructor() {
    super()
    this.state = {
      expanded: 0,
    }
  }

  componentDidMount() {
    if(!this.props.selectedCampaign) {
      this.props.fetchCampaignById(this.props.match.params.id)
    }
  }

  render() {

    if(!this.props.selectedCampaign) return null

    const { classes, selectedCampaign } = this.props
    const { expanded } = this.state
    const { platforms } = selectedCampaign
    const handleChange = panel => (event, expanded) => {
      this.setState({
        expanded: expanded ? panel : false,
      })
    }

    return (
      <div className={classes.root} style={{marginTop: 10}}>
        {Object.keys(platforms).map((p, i) => {
          return (
            <ExpansionPanel key={i} expanded={expanded === i} onChange={handleChange(i)}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{p}</Typography>
                <Typography className={classes.secondaryHeading}>
                  {platforms[p].creatives.header || (`${platforms[p].creatives.header_1}, ${platforms[p].creatives.header_2}`)}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className={classes.wrapper}>
                  <div className={classes.sectionCreative}>
                    <SectionCreative creatives={platforms[p].creatives} />
                  </div>
                  <div className={classes.sectionStatus}>
                    <SectionStatus campaign={platforms[p]} />
                  </div>
                  <div className={classes.sectionAudience}>
                    <SectionAudience audience={platforms[p].target_audiance} />
                  </div>
                  <div className={classes.sectionInsights}>
                    <SectionInsights insights={platforms[p].insights} />
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        })}
      </div>
    )
  }
}

CampaignDetail.propTypes = {
  selectedCampaign: PropTypes.object,
  fetchCampaignById: PropTypes.func,
  match: PropTypes.object,
  classes: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCampaignById: fetchCampaignById}, dispatch)
}

function mapStateToProps(state) {
  return {
    selectedCampaign: state.campaigns.selectedCampaign
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignDetail))