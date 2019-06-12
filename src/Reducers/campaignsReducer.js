import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  SELECT_CAMPAIGN
} from "../Actions/types";


const initialState = {
  //   currentUser: null,
  campaigns: [],
  campaignCreated: {},
  selectedCampaign: null
};

export default function (state = initialState, action) {
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
    case SELECT_CAMPAIGN:
      return {
        ...state,
        selectedCampaign: action.payload
      }


      default:
        return state;
  }
}