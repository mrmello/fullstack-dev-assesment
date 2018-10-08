import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchCampaigns } from '../../actions'
import { bindActionCreators } from 'redux'

class Campaigns extends Component {

  componentDidMount() {
    this.props.fetchCampaigns()
  }

  renderList() {
    return this.props.campaigns.map((campaing) => {
      return (
        <div key={campaing.id}>
          <span>{campaing.title}</span>
        </div>
      )
    })
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

Campaigns.propTypes = {
  campaigns: PropTypes.array,
  fetchCampaigns:PropTypes.func
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCampaigns: fetchCampaigns}, dispatch)
}

function mapStateToProps(state) {
  return {
    campaigns: state.campaigns.campaigns
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Campaigns)