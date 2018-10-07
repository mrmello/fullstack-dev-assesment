import types from "./Types"

/**
 * Action to be dispatched when fetching campaigns
 */
export const fetchCampaigns = () => ({
  type: types.FETCH_CAMPAIGNS_REQUESTED,
})
