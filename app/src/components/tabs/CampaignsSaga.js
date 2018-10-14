import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/Types'
import Api from '../../api'

function* fetchCampaigns() {
  const response = yield call(Api.fetchCampaigns)
  let arrayStatus = []
  for(let campaign of response.data) {
    var map = new Map()
    let index = arrayStatus.findIndex(element => element.has(campaign.status))
    if(index > -1) {
      arrayStatus.splice(index, 1, map.set(campaign.status, [arrayStatus[index].get(campaign.status)[0], campaign]))
    } else {
      arrayStatus.push(map.set(campaign.status, [{campaign}]))
    }
  }
  yield put({type: types.FETCH_CAMPAIGNS_SUCCEEDED, payload: arrayStatus})
}

function* fetchCampaignById(action) {
  const response = yield call(Api.fetchCampaignById, action.payload)
  yield put({type: types.FETCH_CAMPAIGN_BY_ID_SUCCEEDED, payload: response.data[0]})
}

function* watcherWeatherSaga() {
  yield takeLatest(types.FETCH_CAMPAIGNS_REQUESTED, fetchCampaigns)
  yield takeLatest(types.FETCH_CAMPAIGN_BY_ID_REQUESTED, fetchCampaignById)
}

export default watcherWeatherSaga