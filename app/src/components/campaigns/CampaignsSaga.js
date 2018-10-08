import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/Types'
import Api from '../../api'

function* fetchCampaigns() {
  const response = yield call(Api.fetchCampaigns)
  yield put({type: types.FETCH_CAMPAIGNS_SUCCEEDED, payload: response.data})
}

function* watcherWeatherSaga() {
  yield takeLatest(types.FETCH_CAMPAIGNS_REQUESTED, fetchCampaigns)
}

export default watcherWeatherSaga