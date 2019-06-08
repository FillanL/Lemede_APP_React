import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  CREATE_USER,
  AUTH_USER
} from "../Actions/types";
// import { stat } from 'fs';

const initialState = {
  currentUser: null,
  campaigns: [],
  campaignCreated: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload
      };
    case NEW_CAMPAIGN:
      return {
        ...state,
        newCampaign: action.payload
      };
    case CREATE_USER:
      return {
        ...state,
        newUser: action.payload
      };
    case AUTH_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
}
