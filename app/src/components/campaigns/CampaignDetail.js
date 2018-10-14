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
import SectionCreative from '../sections/SectionCreative'

const styles = theme => ({
  root: {
    felxGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    textTransform: 'capitalize'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridGap: '0.5em'
  },
  sectionCreative: {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '3',
  },
  sectionStatus: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '2',
  },
  sectionAudience: {
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '2',
    gridRowEnd: '3',
    alignSelf: 'flex-end'
  }
})
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
                    <SectionCreative creatives={platforms[p].creatives} />
                  </div>
                  <div className={classes.sectionAudience}>
                    <SectionCreative creatives={platforms[p].creatives} />
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