import types from '../../actions/Types'
// initial state when there is no data to show
const initialState = {
  campaigns: null
}

export default function(state = initialState, action) {
  //console.log(action.payload)
  switch(action.type){
  case types.FETCH_CAMPAIGNS_SUCCEEDED:
    return {
      campaigns: action.payload
    }
  default:
    return state
  }
}