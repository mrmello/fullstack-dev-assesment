import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/Types'
import Api from '../../api'
import { campaignsParser, campaignByIdParser } from '../../api/ResponseParser'

function* fetchCampaigns() {
  try {
    const response = yield call(Api.fetchCampaigns)
    let campaigns = yield call(campaignsParser, response)
    yield put({type: types.FETCH_CAMPAIGNS_SUCCEEDED, payload: campaigns})
  } catch (_) {
    yield put({type: types.FETCH_CAMPAIGNS_FAILED, payload: "Something went =/"})
  }
}

function* fetchCampaignById(action) {
  try {
    const response = yield call(Api.fetchCampaignById, action.payload)
    const campaign = yield call(campaignByIdParser, response)
    yield put({type: types.FETCH_CAMPAIGN_BY_ID_SUCCEEDED, payload: campaign})
  } catch (_) {
    yield put({type: types.FETCH_CAMPAIGN_BY_ID_FAILED, payload: "Campaign not found =/"})
  }
}

function* watcherWeatherSaga() {
  yield takeLatest(types.FETCH_CAMPAIGNS_REQUESTED, fetchCampaigns)
  yield takeLatest(types.FETCH_CAMPAIGN_BY_ID_REQUESTED, fetchCampaignById)
}

export default watcherWeatherSaga