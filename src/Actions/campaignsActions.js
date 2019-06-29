import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  SELECT_CAMPAIGN,
  EDITING_CAMPAIGN_ID,
  UPDATE_CAMPAIGN_INFO,
  DELETE_CAMPAIGN,
  FAVORITE_CAMPAIGN,
  SEARCH_TERM
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
  return fetch("http://localhost:3000/api/v1/campaign", {
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
    .then(campaign =>{
      if(!campaign.error){
        dispatch({
          type: NEW_CAMPAIGN,
          payload: campaign
        })
      }
      // debugger
      return campaign;
    })
    
};
export const updateCampaign = (updatedCampaign,id) => dispatch => {
  fetch(`http://localhost:3000/api/v1/campaign/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
      updatedCampaign
      })
    })
    .then(r => r.json())
    .then(campaign =>{
        dispatch({
          type: UPDATE_CAMPAIGN_INFO,
          payload: campaign
        })
      
      }
    );
};

export const selectCampaign = id => dispatch => {
  dispatch({
    type: SELECT_CAMPAIGN,
    payload: id
  })
}
export const editCampaignId = id => dispatch => {
  dispatch({
    type: EDITING_CAMPAIGN_ID,
    payload: id
  })
}
export const deleteCampaign = id => dispatch =>{

  fetch(`http://localhost:3000/api/v1/campaign/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(r => r.json())
  .then(campaigns => dispatch({
      type: DELETE_CAMPAIGN,
      payload: campaigns
    })
    )
}
export const favoriteCampaign =(user, campaign)=> dispatch=>{
  fetch(`http://localhost:3000/favorite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body:JSON.stringify({
        user,
        campaign
    })
  })
  .then(r => r.json())
  .then(user => dispatch({
      type: FAVORITE_CAMPAIGN,
      payload: user
    })
    )
}
export const updateSeach =(term)=>dispatch=>{
  
  dispatch({
    type:SEARCH_TERM,
    payload: term
  })
}

export const randomEight =(camp)=>dispatch=>{
  let i = 0
  let uniqRandoms = []
  let maxNum = camp.length

  if (maxNum > 8) {
    while (i < 8) {
      let randomNum = Math.floor(Math.random() * maxNum) + 1

      if (uniqRandoms.includes(randomNum) === false) {
        uniqRandoms.push(randomNum)
        i++
      }
    }
    return uniqRandoms
  } else {
    return 0
  }
}