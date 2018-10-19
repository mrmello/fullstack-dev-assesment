import types from "./Types"

/**
 * Action to be dispatched when fetching campaigns
 */
export const fetchCampaigns = () => ({
  type: types.FETCH_CAMPAIGNS_REQUESTED,
})
/**
 * Action to be dispatched when fetching a specific campaign
 */
export const fetchCampaignById = (id) => ({
  type: types.FETCH_CAMPAIGN_BY_ID_REQUESTED,
  payload: id
})
/**
 * Action to be dispatched selecting a campaign to be shown
 */
export const selectCampaign = (campaign) => ({
  type: types.SELECT_CAMPAIGN,
  payload: campaign
})