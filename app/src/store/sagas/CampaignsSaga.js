import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/Types'
import Api from '../../api'
import { campaignsParser, campaignByIdParser } from '../../api/ResponseParser'

/**
 * Fetches all campaigns
 */
function* fetchCampaigns() {
  try {
    const response = yield call(Api.fetchCampaigns)
    let campaigns = yield call(campaignsParser, response)
    yield put({type: types.FETCH_CAMPAIGNS_SUCCEEDED, payload: campaigns})
  } catch (_) {
    yield put({type: types.FETCH_CAMPAIGNS_FAILED, payload: "Something went wrong =/"})
  }
}

/**
 * Fetches campaign by ID
 */
function* fetchCampaignById(action) {
  try {
    const response = yield call(Api.fetchCampaignById, action.payload)
    const campaign = yield call(campaignByIdParser, response)
    yield put({type: types.FETCH_CAMPAIGN_BY_ID_SUCCEEDED, payload: campaign})
  } catch (_) {
    yield put({type: types.FETCH_CAMPAIGN_BY_ID_FAILED, payload: "Campaign not found =/"})
  }
}

/**
 * Watches for the specific action an acts as a middleware to run the request
 * to the backend server and then passes the data to the
 * CampaignsReducer
 */
function* watcherWeatherSaga() {
  yield takeLatest(types.FETCH_CAMPAIGNS_REQUESTED, fetchCampaigns)
  yield takeLatest(types.FETCH_CAMPAIGN_BY_ID_REQUESTED, fetchCampaignById)
}

export default watcherWeatherSaga