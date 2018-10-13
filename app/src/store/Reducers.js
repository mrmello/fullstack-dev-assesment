import { combineReducers } from 'redux'
import campaingsReducer from '../components/tabs/CampaignsReducer'
/**
 * Groups and returns the application reducers
 */
const rootReducer = combineReducers({
  campaigns: campaingsReducer,
})

export default rootReducer