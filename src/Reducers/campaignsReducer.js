import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  SELECT_CAMPAIGN, 
  UPDATE_CAMPAIGNS
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
        campaigns: [...state.campaigns, action.payload]
      };
    case SELECT_CAMPAIGN:
      return {
        ...state,
        selectedCampaign: action.payload
      }
      case UPDATE_CAMPAIGNS:
        return ({...state, campaigns: state.campaigns.map(camp => camp.id === action.payload.campaign.id ? action.payload.campaign : camp)})
      default:
        return state;
  }
}