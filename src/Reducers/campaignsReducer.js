import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  SELECT_CAMPAIGN,
  UPDATE_CAMPAIGNS,
  EDITING_CAMPAIGN_ID,
  UPDATE_CAMPAIGN_INFO,
  DELETE_CAMPAIGN,
  FEATURE_CAMPAIGN
} from "../Actions/types";

const initialState = {
  //   currentUser: null,
  campaigns: [],
  campaignCreated: {},
  selectedCampaign: null,
  editingCampaignId: null
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
        campaigns: [...state.campaigns, action.payload]
      };
    case SELECT_CAMPAIGN:
      return {
        ...state,
        selectedCampaign: action.payload
      };
    case UPDATE_CAMPAIGNS:
      return {
        ...state,
        campaigns: state.campaigns.map(camp =>
          camp.id === action.payload.campaign.id
            ? action.payload.campaign
            : camp
        )
      };
    case EDITING_CAMPAIGN_ID:
      return {
        ...state,
        editingCampaignId: action.payload
      };
    case UPDATE_CAMPAIGN_INFO:
      return {
        ...state,
        campaigns: state.campaigns.map(camp =>
          camp.id === action.payload.id
            ? action.payload
            : camp)
      };
      case FEATURE_CAMPAIGN:
          return {
            ...state,
            campaigns: state.campaigns.map(camp =>
              camp.id === action.payload.campaign.id
                ? action.payload.campaign
                : camp)
          };
      case DELETE_CAMPAIGN:
        return{
          ...state,
          campaigns: action.payload
        };
        
    default:
      return state;
  }
}
