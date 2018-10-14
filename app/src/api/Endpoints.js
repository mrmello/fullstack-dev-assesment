/**
 * Groups the urls as CONSTANTS and returns the object to be consumed by whoever needs
 */
let BASE_URL = process.env.BASE_URL || 'http://localhost:9080'

const endpoints = {
  ALL_CAMPAINGS         :   `${BASE_URL}/campaigns`,
  CAMPAIGN_BY_ID        :   `${BASE_URL}/campaigns/`,
}

export default endpoints