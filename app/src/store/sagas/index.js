import { all, fork } from 'redux-saga/effects'
import campaignsSaga from './CampaignsSaga'

/**
 * Runs the saga watchers to work as a middleware for the redux store
 */
export default function* root() {
  yield all([
    fork(campaignsSaga)
  ])
}
