import { AUTH_USER, REMOVE_USER, VALID_USER, UPDATE_CAMPAIGNS, DELETE_USER, FEATURE_CAMPAIGN } from "./types";

// USER CRUDDD
export const createUser = userCreateValues => dispatch => {
  fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: userCreateValues })
  });
};

// when components all mount.. check if user is logged in already
export const isUserLoggedIn = () => dispatch => {
  const token = localStorage.getItem("token");
  if (token) {
    fetch("http://localhost:3000/api/v1/loggedIn", {
      headers: {
        Authentication: token
      }
    })
      .then(r => r.json())
      .then(user => {
        if (!user.error) {
          dispatch({
            type: VALID_USER,
            payload: user
          });
        }
      });
  }
};

// export const updateUser = userCreateValues => dispatch => {
//   fetch("http://localhost:3000/api/v1/users", {
//     method: "UPDATE",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({ user: userCreateValues })
//   });
// };

// export const deleteUser = userCreateValues => dispatch => {
//   fetch("http://localhost:3000/api/v1/users", {
//     method: "UPDATE",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({ user: userCreateValues })
//   });
// };

//   log in userr
export const logInUser = logInValues => dispatch => {
  return fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ auth: logInValues })
  })
    .then(r => r.json())
    .then(user => {
      if (!user.error) {
        dispatch({
          type: AUTH_USER,
          payload: user.currentUser
        });
        localStorage.setItem("token", user.token);
      }
      return user;
    });
};

export const signOutCurrent = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({
    type: REMOVE_USER,
    payload: null
  });
};

// =============================
// add to user's wallet

export const addAccountBalance = (id, amount) => dispatch => {
  fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      account_balance: amount,
      id: localStorage.getItem("token")
    })
  })
    .then(r => r.json())
    .then(user =>
      dispatch({
        type: AUTH_USER,
        payload: user
      })
    );
};

export const donationToCampaign = (
  donateValue,
  user_id,
  campaign_id
) => dispatch => {
  fetch("http://localhost:3000/back_campaign", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      donate: donateValue,
      user_id: user_id,
      campaign_id: campaign_id
    })
  })
    .then(r => r.json())
    .then(items =>{
   
      dispatch({
        type: UPDATE_CAMPAIGNS,
        payload: items
      })
    }
    );
};

export const deleteCurrentUser = id => dispatch=>{
  // dispatch({
  
  // })
 fetch(`http://localhost:3000/api/v1/users/${id}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
})
.then(r => r.json())
.then(campaign => dispatch({
  type: DELETE_USER,
  payload: campaign
}))
localStorage.removeItem("token");
}

export const makeCampaignFeatured = (
  user_id,
  campaign_id
) => dispatch => {
  fetch("http://localhost:3000/featured", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user_id: user_id,
      campaign_id: campaign_id
    })
  })
    .then(r => r.json())
    .then(items => dispatch({
        type: FEATURE_CAMPAIGN,
        payload: items
      })
    
    );
};