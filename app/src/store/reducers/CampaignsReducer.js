import types from '../../actions/Types'

const initialState = {
  campaigns: null,
  selectedCampaign: null,
  errorOccured: null,
  errorMessage: "",
}

export default function(state = initialState, action) {
  switch(action.type){
  case types.FETCH_CAMPAIGNS_SUCCEEDED:
    return {
      ...state,
      campaigns: action.payload,
      errorOccured: null,
    }
  case types.SELECT_CAMPAIGN:
  case types.FETCH_CAMPAIGN_BY_ID_SUCCEEDED:
    return {
      ...state,
      selectedCampaign: action.payload,
      errorOccured: null,
    }
  case types.FETCH_CAMPAIGN_BY_ID_FAILED:
  case types.FETCH_CAMPAIGNS_FAILED:
    return {
      errorOccured: true,
      errorMessage: action.payload
    }
  default:
    return state
  }
}