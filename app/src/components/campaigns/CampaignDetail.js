import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchCampaigns } from '../../actions'
import { bindActionCreators } from 'redux'

class CampaignDetail extends Component {

  componentDidMount() {
    if(!this.props.campaigns) {
      this.props.fetchCampaigns()
    }
  }

  renderList() {
    console.log(this.props.campaigns)
    console.log(this.props.match)
    return (
      null
    )
  }

  render() {
    if(!this.props.campaigns) return null
    return (
      <div >
        {this.renderList()}
      </div>
    )
  }
}

CampaignDetail.propTypes = {
  campaigns: PropTypes.array,
  fetchCampaigns:PropTypes.func
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCampaigns: fetchCampaigns}, dispatch)
}

function mapStateToProps(state) {
  console.log(state)
  return {
    campaigns: state.campaigns.campaigns,
    selectedCampaign: state.campaigns.selectedCampaign
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CampaignDetail)