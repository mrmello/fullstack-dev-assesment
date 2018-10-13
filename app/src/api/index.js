import axios from 'axios'
import endpoints from './Endpoints'
/**
 * Runs the requests to the APIs using axios
 */
export default {
  fetchCampaigns:     ()    => axios.get(`${endpoints.ALL_CAMPAINGS}`),
  fetchCampaignById:  (id)  => axios.get(`${endpoints.CAMPAIGN_BY_ID}${id}`),
}