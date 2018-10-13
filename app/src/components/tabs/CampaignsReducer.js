import types from '../../actions/Types'
// initial state when there is no data to show
const initialState = {
  campaigns: null,
  selectedCampaign: null
}

export default function(state = initialState, action) {
  //console.log(action.type)
  switch(action.type){
  case types.FETCH_CAMPAIGNS_SUCCEEDED:
    return {
      ...state,
      campaigns: action.payload
    }
  case types.SELECT_CAMPAIGN:
  case types.FETCH_CAMPAIGN_BY_ID_SUCCEEDED:
    return {
      ...state,
      selectedCampaign: action.payload
    }
  default:
    return state
  }
}