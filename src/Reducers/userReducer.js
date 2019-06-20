import {
  AUTH_USER,
  REMOVE_USER,
  VALID_USER,
  ADD_BALANCE,
  UPDATE_CAMPAIGNS,
  FAVORITE_CAMPAIGN,
  FEATURE_CAMPAIGN,
  DELETE_USER
} from "../Actions/types";

const initialState = {
  currentUser: null
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        currentUser: action.payload,
        valid: true
      };
    case REMOVE_USER:
      return {
        ...state,
        currentUser: action.payload,
        valid: false
      };
    case VALID_USER:
      return {
        ...state,
        currentUser: action.payload,
        valid: true
      };
    case ADD_BALANCE:
      return {
        ...state,
        currentUser: action.payload,
        valid: true
      };
    case UPDATE_CAMPAIGNS:
      return {
        ...state,
        currentUser: action.payload.user,
        valid: true
      };
    case FAVORITE_CAMPAIGN:
      return {
        ...state,
        currentUser: action.payload,
        valid: true
      };
      case FEATURE_CAMPAIGN:
        console.log("user",action.payload);
        
        return{
          ...state,
          currentUser: action.payload.user,
          valid: true
        }
      case DELETE_USER:
        return{
          ...state,
          currentUser: null,
          campaigns: action.payload,
          valid: false
        }
    default:
      return state;
  }
}
