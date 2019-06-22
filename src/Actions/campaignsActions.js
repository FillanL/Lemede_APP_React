import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  SELECT_CAMPAIGN,
  EDITING_CAMPAIGN_ID,
  UPDATE_CAMPAIGN_INFO,
  DELETE_CAMPAIGN,
  FAVORITE_CAMPAIGN,
  SEARCH_TERM,EIGHT_RANDOMNUM

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
  // let i = 0
  // let uniqRandom = []
  // let Count = camp.length

  // if (Count > 8) {
  //   while (i < 8) {
  //     let jnum = Math.floor(Math.random() * Count) + 1

  //     if (uniqRandom.includes(jnum) === false) {
  //       uniqRandom.push(jnum)
  //       i++
  //     }
  //   }
  //   return camp.filter(campaign => uniqRandom.includes(campaign.id))
   
  // } else {
  //   return 0
  // }

  // dispatch({
  //   type:EIGHT_RANDOMNUM,
  //   payload: uniqRandom
  // })

}