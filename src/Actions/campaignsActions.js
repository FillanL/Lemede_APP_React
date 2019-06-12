import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  SELECT_CAMPAIGN
} from "./types";

export const fetchCampaign = () => dispatch => {
  fetch("http://localhost:3000/api/v1/campaign")
    .then(r => r.json())
    .then(campaigns =>
      dispatch({
        type: FETCH_CAMPAIGNS,
        payload: campaigns
      })
    );
};

export const createCampaign = newcamp => dispatch => {
  fetch("http://localhost:3000/api/v1/campaign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        ...newcamp,
        creator_id: localStorage.getItem("token")
      })
    })
    .then(r => r.json())
    .then(campaign =>
      dispatch({
        type: NEW_CAMPAIGN,
        payload: campaign
      })
    );
};

export const selectCampaign = id => dispatch => {
  dispatch({
    type: SELECT_CAMPAIGN,
    payload: id
  })
}