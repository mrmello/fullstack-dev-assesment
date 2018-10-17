import { combineReducers } from 'redux'
import campaingsReducer from './CampaignsReducer'
/**
 * Groups and returns the application reducers
 */
const rootReducer = combineReducers({
  campaigns: campaingsReducer,
})

export default rootReducer